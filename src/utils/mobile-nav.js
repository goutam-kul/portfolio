const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link')

    // State
    let isMobileNavOpen = false;

    // Handlers 
    const toggleMobileNav = () => {
        isMobileNavOpen = !isMobileNavOpen
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    }

    // Events
    headerBtn.addEventListener('click', toggleMobileNav);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

export default mobileNav;