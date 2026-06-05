/**
 * Premium mega menu: hover-to-open on desktop (pointer) devices.
 * Closes sibling menus when one opens, and adds a short leave-delay
 * so the panel doesn't vanish when the cursor briefly leaves the trigger.
 */
class PremiumMegaMenu {
  constructor() {
    this.LEAVE_DELAY = 120; // ms before closing after cursor leaves
    this.leaveTimers = new WeakMap();

    // Wait until header-menu custom element is defined before wiring up.
    customElements.whenDefined('header-menu').then(() => this.init());
  }

  init() {
    if (!window.matchMedia('(hover: hover) and (min-width: 990px)').matches) return;

    this.menus = Array.from(document.querySelectorAll('header-menu .mega-menu'));
    if (!this.menus.length) return;

    this.menus.forEach((details) => {
      const wrapper = details.closest('header-menu');

      details.addEventListener('mouseenter', () => {
        clearTimeout(this.leaveTimers.get(details));
        this.openMenu(details);
      });

      details.addEventListener('mouseleave', () => {
        const timer = setTimeout(() => this.closeMenu(details, wrapper), this.LEAVE_DELAY);
        this.leaveTimers.set(details, timer);
      });

      // Prevent click-toggle fighting hover — only allow click to close an open menu.
      const summary = details.querySelector('summary');
      summary.addEventListener('click', (e) => {
        if (details.hasAttribute('open')) {
          e.preventDefault();
          this.closeMenu(details, wrapper);
        } else {
          // Let the native toggle open it; our mouseenter already opened it,
          // but on touch-screen desktop (rare) this handles the fallback.
          this.closeOthers(details);
        }
      });
    });

    // Close all on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.menus.forEach((d) => this.closeMenu(d));
    });
  }

  openMenu(details) {
    this.closeOthers(details);
    if (details.hasAttribute('open')) return;
    details.setAttribute('open', '');
    const summary = details.querySelector('summary');
    summary.setAttribute('aria-expanded', 'true');

    // Let the header-menu element know a menu is open so sticky header stays visible.
    const headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper) headerWrapper.preventHide = true;
  }

  closeMenu(details, wrapper) {
    if (!details.hasAttribute('open')) return;
    details.removeAttribute('open');
    const summary = details.querySelector('summary');
    summary.setAttribute('aria-expanded', 'false');

    const headerWrapper = document.querySelector('.header-wrapper');
    if (headerWrapper && !this.menus.some((d) => d.hasAttribute('open'))) {
      headerWrapper.preventHide = false;
    }
  }

  closeOthers(except) {
    this.menus.forEach((d) => {
      if (d !== except) this.closeMenu(d);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new PremiumMegaMenu());
