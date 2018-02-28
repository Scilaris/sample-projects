window.addEventListener('scroll', fixedNav);

function fixedNav() {
    const nav = document.querySelector('.navigation');

    if (window.scrollY > nav.offsetTop) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight;
    } else {
        document.body.classList.remove('fixed-nav');        
    }
}