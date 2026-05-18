// Mobile nav toggle + active link
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const open = nav.classList.contains('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Active link based on data-page attribute on <body>
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll('.nav a').forEach(a => {
      if (a.dataset.nav === page) a.classList.add('is-active');
    });
  }
})();
