function stickyHeader(selector, bodyClass) {
  const target = document.querySelector(selector);
  const targetOffsetTop = target.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY > targetOffsetTop) {
      document.body.classList.add('sticky-header');
      document.body.style.paddingTop = target.offsetHeight;
    } else {
      document.body.classList.remove('sticky-header');
    }
  });
}

stickyHeader('.navigation');
