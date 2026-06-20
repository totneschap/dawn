(function () {
  var modal = null;
  var modalContent = null;
  var productFormScriptLoaded = false;

  // ── Modal ────────────────────────────────────────────────────────────────

  function buildModal() {
    modal = document.createElement('div');
    modal.id = 'QuickViewModal';
    modal.className = 'quick-view-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Quick view');
    modal.hidden = true;
    modal.innerHTML =
      '<div class="quick-view-modal__overlay"></div>' +
      '<div class="quick-view-modal__dialog">' +
        '<button class="quick-view-modal__close" type="button" aria-label="Close">' +
          '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
          '</svg>' +
        '</button>' +
        '<div class="quick-view-modal__content"></div>' +
      '</div>';
    document.body.appendChild(modal);

    modalContent = modal.querySelector('.quick-view-modal__content');

    modal.querySelector('.quick-view-modal__overlay').addEventListener('click', close);
    modal.querySelector('.quick-view-modal__close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && !modal.hidden) close();
    });
  }

  function open(productUrl) {
    if (!modal) buildModal();
    modal.hidden = false;
    document.body.classList.add('quick-view-open');
    modalContent.innerHTML = '<div class="quick-view-modal__spinner" aria-label="Loading"></div>';

    Promise.all([
      loadProductFormScript(),
      fetchSection(productUrl)
    ]).then(function (results) {
      var html = results[1];
      if (!html) { modalContent.innerHTML = '<p style="padding:2rem">Could not load product.</p>'; return; }

      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      var inner = doc.querySelector('.quick-view-product');
      if (!inner) { modalContent.innerHTML = '<p style="padding:2rem">Could not load product.</p>'; return; }

      modalContent.innerHTML = '';
      modalContent.appendChild(inner);
      initVariants(inner);

      var closeBtn = modal.querySelector('.quick-view-modal__close');
      if (closeBtn) closeBtn.focus();
    }).catch(function () {
      modalContent.innerHTML = '<p style="padding:2rem">Could not load product.</p>';
    });
  }

  function close() {
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove('quick-view-open');
  }

  // ── Section fetch ────────────────────────────────────────────────────────

  function fetchSection(productUrl) {
    return fetch(productUrl + '?sections=product-quick-view')
      .then(function (r) { return r.json(); })
      .then(function (data) { return data['product-quick-view'] || null; });
  }

  // ── Dynamically load product-form.js so <product-form> works ────────────

  function loadProductFormScript() {
    if (productFormScriptLoaded || customElements.get('product-form')) {
      productFormScriptLoaded = true;
      return Promise.resolve();
    }
    return new Promise(function (resolve) {
      var existing = document.querySelector('script[src*="product-form.js"]');
      if (existing) { productFormScriptLoaded = true; resolve(); return; }
      var s = document.createElement('script');
      s.src = document.querySelector('link[rel="preload"][as="script"][href*="product-form"]')
              ? document.querySelector('link[rel="preload"][as="script"][href*="product-form"]').href
              : '/cdn/shop/t/1/assets/product-form.js'; // fallback, overridden below
      // Find the real URL from any existing asset tag
      var assetBase = (document.querySelector('script[src*="/assets/"]') || {}).src || '';
      if (assetBase) {
        s.src = assetBase.replace(/\/[^/]+\.js(\?.*)?$/, '/product-form.js');
      }
      s.defer = true;
      s.onload = function () { productFormScriptLoaded = true; resolve(); };
      s.onerror = function () { resolve(); }; // still show modal even if script fails
      document.head.appendChild(s);
    });
  }

  // ── Variant switching ────────────────────────────────────────────────────

  function initVariants(container) {
    var variantDataEl = container.querySelector('[id^="QuickViewVariants-"]');
    if (!variantDataEl) return;

    var variants;
    try { variants = JSON.parse(variantDataEl.textContent); } catch (e) { return; }

    var selects = Array.from(container.querySelectorAll('select[data-option-index]'));
    var hiddenInput = container.querySelector('.product-variant-id');
    var submitBtn = container.querySelector('button[type="submit"][name="add"]');
    var submitSpan = submitBtn && submitBtn.querySelector('span:not(.loading-overlay__spinner)');
    var priceContainer = container.querySelector('.quick-view-product__price');
    var moneyFormat = container.dataset.moneyFormat || '£{{amount}}';

    if (!selects.length) return;

    function currentOptions() {
      return selects.map(function (s) { return s.value; });
    }

    function findVariant(options) {
      return variants.find(function (v) {
        return v.options.every(function (o, i) { return o === options[i]; });
      });
    }

    function formatMoney(cents) {
      return moneyFormat
        .replace('{{amount}}', (cents / 100).toFixed(2))
        .replace('{{amount_no_decimals}}', Math.floor(cents / 100))
        .replace('{{amount_with_comma_separator}}', (cents / 100).toFixed(2).replace('.', ','))
        .replace('{{amount_no_decimals_with_comma_separator}}', Math.floor(cents / 100));
    }

    function updateUI(variant) {
      if (!variant) return;

      // Hidden input
      if (hiddenInput) {
        hiddenInput.value = variant.id;
        if (variant.available) { hiddenInput.removeAttribute('disabled'); }
        else { hiddenInput.setAttribute('disabled', ''); }
      }

      // Button
      if (submitBtn) {
        submitBtn.disabled = !variant.available;
        if (submitSpan) {
          submitSpan.textContent = variant.available ? 'Add to cart' : 'Sold out';
        }
      }

      // Price
      if (priceContainer) {
        var regularEl = priceContainer.querySelector('.price-item--regular');
        var saleEl = priceContainer.querySelector('.price-item--sale');
        var priceWrapper = priceContainer.querySelector('.price');

        if (variant.compare_at_price && variant.compare_at_price > variant.price) {
          if (priceWrapper) priceWrapper.classList.add('price--on-sale');
          if (saleEl) saleEl.textContent = formatMoney(variant.price);
          if (regularEl) regularEl.textContent = formatMoney(variant.compare_at_price);
        } else {
          if (priceWrapper) priceWrapper.classList.remove('price--on-sale');
          if (regularEl) regularEl.textContent = formatMoney(variant.price);
        }
      }
    }

    selects.forEach(function (select) {
      select.addEventListener('change', function () {
        updateUI(findVariant(currentOptions()));
      });
    });
  }

  // ── Button delegation ────────────────────────────────────────────────────

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-quick-view]');
    if (!btn) return;
    e.preventDefault();
    var url = btn.dataset.productUrl;
    if (url) open(url);
  });
})();
