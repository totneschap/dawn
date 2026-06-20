class CountdownTimer extends HTMLElement {
  connectedCallback() {
    var raw = this.dataset.endDate;
    if (!raw) return;

    // Normalise "YYYY-MM-DD HH:MM:SS" → ISO format so browsers parse as local time
    this.endDate = new Date(raw.trim().replace(' ', 'T'));
    if (isNaN(this.endDate)) return;

    this.daysEl = this.querySelector('[data-days]');
    this.hoursEl = this.querySelector('[data-hours]');
    this.minutesEl = this.querySelector('[data-minutes]');
    this.secondsEl = this.querySelector('[data-seconds]');

    this.tick();
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  tick() {
    var diff = this.endDate - Date.now();

    if (diff <= 0) {
      clearInterval(this.interval);
      this.setUnits(0, 0, 0, 0);
      this.handleExpired();
      return;
    }

    var days    = Math.floor(diff / 86400000);
    var hours   = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);
    var seconds = Math.floor((diff % 60000) / 1000);

    this.setUnits(days, hours, minutes, seconds);
  }

  setUnits(d, h, m, s) {
    if (this.daysEl)    this.daysEl.textContent    = this.pad(d);
    if (this.hoursEl)   this.hoursEl.textContent   = this.pad(h);
    if (this.minutesEl) this.minutesEl.textContent = this.pad(m);
    if (this.secondsEl) this.secondsEl.textContent = this.pad(s);
  }

  pad(n) {
    return String(n).padStart(2, '0');
  }

  handleExpired() {
    var expiredText = this.dataset.expiredText;
    var timerEl = this.querySelector('.countdown-timer__timer');
    var headingEl = this.querySelector('.countdown-timer__heading');

    if (expiredText) {
      var expiredEl = this.querySelector('.countdown-timer__expired');
      if (timerEl) timerEl.hidden = true;
      if (headingEl) headingEl.hidden = true;
      if (expiredEl) expiredEl.hidden = false;
    } else {
      // Hide the entire section wrapper
      var section = document.getElementById('CountdownTimer-' + this.dataset.sectionId);
      if (section) section.style.display = 'none';
    }
  }
}

customElements.define('countdown-timer', CountdownTimer);
