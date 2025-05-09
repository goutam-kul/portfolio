import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/featured.css'
import '../styles/components/work.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile-nav.css'
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';
import breakText from './utils/fliptext';
import navAnimations from './utils/nav-animation';
import heroAnimations from './utils/hero-animation';
import aboutAnimations from './utils/about-animations';
import featuredAnimations from './utils/featured-animations';
import contactAnimation from './utils/contact-animations';

navAnimations();
heroAnimations();
breakText();
aboutAnimations();
featuredAnimations();
mobileNav();
darkMode();
lazyLoading();
contactAnimation();

var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
    },

});
