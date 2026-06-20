(function () {
  var container = document.querySelector('.collection-load-more');
  if (!container) return;

  var grid = document.getElementById('product-grid');
  if (!grid) return;

  var btn = container.querySelector('.collection-load-more__btn');
  var sentinel = container.querySelector('.collection-load-more__sentinel');
  var paginationType = container.dataset.paginationType;
  var loading = false;

  function getNextUrl() {
    return btn ? btn.dataset.nextUrl : null;
  }

  function setLoading(isLoading) {
    loading = isLoading;
    if (!btn) return;
    btn.disabled = isLoading;
    var label = btn.querySelector('.collection-load-more__label');
    var spinner = btn.querySelector('.collection-load-more__spinner');
    if (label) label.hidden = isLoading;
    if (spinner) spinner.hidden = !isLoading;
  }

  function hideButton() {
    if (btn) btn.hidden = true;
    if (sentinel) sentinel.hidden = true;
    if (observer) observer.disconnect();
  }

  function loadMore() {
    var nextUrl = getNextUrl();
    if (!nextUrl || loading) return;

    setLoading(true);

    fetch(nextUrl)
      .then(function (response) {
        if (!response.ok) throw new Error('fetch failed');
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        // Append new product items
        var newGrid = doc.getElementById('product-grid');
        if (newGrid) {
          var items = Array.from(newGrid.children);
          items.forEach(function (item) {
            grid.appendChild(item);
          });
        }

        // Find next page URL from fetched page
        var nextBtn = doc.querySelector('.collection-load-more__btn[data-next-url]');
        if (nextBtn && nextBtn.dataset.nextUrl) {
          if (btn) btn.dataset.nextUrl = nextBtn.dataset.nextUrl;
        } else {
          // No more pages
          hideButton();
        }

        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
      });
  }

  var observer = null;

  if (paginationType === 'load_more' && btn) {
    btn.addEventListener('click', loadMore);
  }

  if (paginationType === 'infinite_scroll' && sentinel) {
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            loadMore();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(sentinel);
  }
})();
