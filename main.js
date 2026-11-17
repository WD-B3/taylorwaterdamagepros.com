(function () {
  var header = document.getElementById('top');
  if (!header) return;
  var btn = header.querySelector('.menu-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && header.classList.contains('open')) {
      header.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
    }
  });
})();
