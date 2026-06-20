document.addEventListener('submit', function (e) {
  var form = e.target.closest('[data-back-in-stock]');
  if (!form) return;
  e.preventDefault();

  var fields = form.querySelector('.back-in-stock__fields');
  var success = form.querySelector('.back-in-stock__success');
  var error = form.querySelector('.back-in-stock__error');
  var btn = form.querySelector('[type="submit"]');

  btn.disabled = true;
  if (error) error.hidden = true;

  fetch('/contact', {
    method: 'POST',
    body: new FormData(form)
  })
    .then(function (r) {
      if (!r.ok) throw new Error('Request failed');
      if (fields) fields.hidden = true;
      if (success) success.hidden = false;
    })
    .catch(function () {
      btn.disabled = false;
      if (error) error.hidden = false;
    });
});
