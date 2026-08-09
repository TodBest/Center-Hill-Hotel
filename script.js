const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const siteNav = document.getElementById('siteNav');

if (mobileMenuToggle && siteNav) {
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    const clickedToggle = mobileMenuToggle.contains(event.target);
    const clickedNav = siteNav.contains(event.target);

    if (!clickedToggle && !clickedNav) {
      siteNav.classList.remove('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      siteNav.classList.remove('is-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
