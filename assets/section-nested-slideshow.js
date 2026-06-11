class NestedSlideshow extends HTMLElement {
  constructor() {
    super();
    this.slides     = [];
    this.thumbs     = [];
    this.dots       = [];
    this.current    = 0;
    this.timer      = null;
    this.paused     = false;
  }

  connectedCallback() {
    this.slides  = Array.from(this.querySelectorAll('.nested-slideshow__slide'));
    this.thumbs  = Array.from(this.querySelectorAll('.nested-slideshow__thumb'));
    this.dots    = Array.from(this.querySelectorAll('.nested-slideshow__dot'));
    this.autoplay = this.dataset.autoplay === 'true';
    this.speed    = (parseInt(this.dataset.speed, 10) || 6) * 1000;

    if (this.slides.length < 2) return;

    this.querySelector('.nested-slideshow__arrow--prev')
      ?.addEventListener('click', () => this.prev());
    this.querySelector('.nested-slideshow__arrow--next')
      ?.addEventListener('click', () => this.next());

    this.thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => this.goTo(parseInt(thumb.dataset.index, 10)));
    });

    this.dots.forEach((dot) => {
      dot.addEventListener('click', () => this.goTo(parseInt(dot.dataset.index, 10)));
    });

    // Pause on hover / focus
    this.addEventListener('mouseenter', () => { this.paused = true;  this.stopTimer(); });
    this.addEventListener('mouseleave', () => { this.paused = false; if (this.autoplay) this.startTimer(); });
    this.addEventListener('focusin',    () => { this.paused = true;  this.stopTimer(); });
    this.addEventListener('focusout',   () => { this.paused = false; if (this.autoplay) this.startTimer(); });

    // Keyboard navigation when focused inside the component
    this.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
    });

    // Touch swipe support
    this.initSwipe();

    if (this.autoplay) this.startTimer();

    // Shopify Theme Editor events
    if (window.Shopify?.designMode) {
      document.addEventListener('shopify:block:select', (e) => {
        const block = e.target.closest('.nested-slideshow__slide');
        if (!block || !this.contains(block)) return;
        this.goTo(parseInt(block.dataset.index, 10));
        this.paused = true;
        this.stopTimer();
      });

      document.addEventListener('shopify:section:select', (e) => {
        if (!this.closest(`.shopify-section`)) return;
        this.paused = true;
        this.stopTimer();
      });

      document.addEventListener('shopify:section:deselect', () => {
        this.paused = false;
        if (this.autoplay) this.startTimer();
      });
    }
  }

  goTo(index) {
    const total = this.slides.length;
    const next  = ((index % total) + total) % total;

    if (next === this.current) return;

    // Slides
    this.slides[this.current].classList.remove('is-active');
    this.slides[next].classList.add('is-active');

    // Thumbnails — restart progress animation by forcing reflow
    if (this.thumbs.length) {
      this.thumbs[this.current].classList.remove('is-active');
      const nextThumb = this.thumbs[next];
      nextThumb.classList.remove('is-active');
      void nextThumb.offsetWidth; // reflow to restart animation
      nextThumb.classList.add('is-active');
    }

    // Dots
    if (this.dots.length) {
      this.dots[this.current].classList.remove('is-active');
      this.dots[this.current].setAttribute('aria-selected', 'false');
      this.dots[next].classList.add('is-active');
      this.dots[next].setAttribute('aria-selected', 'true');
    }

    this.current = next;

    // Reset the auto-rotate timer
    this.stopTimer();
    if (this.autoplay && !this.paused) this.startTimer();
  }

  next() { this.goTo(this.current + 1); }
  prev() { this.goTo(this.current - 1); }

  startTimer() {
    this.stopTimer();
    this.timer = setTimeout(() => this.next(), this.speed);
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  initSwipe() {
    let startX = 0;
    let startY = 0;

    this.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    this.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      // Only act on horizontal swipes (more horizontal than vertical)
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        dx < 0 ? this.next() : this.prev();
      }
    }, { passive: true });
  }
}

customElements.define('nested-slideshow', NestedSlideshow);
