function featuredAnimations() {
    gsap.from(
        '.featured__subtitle, .featured__title, .featured__link', {
        x: -100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".featured__subtitle",
            scroller: "body",
        }
    })

    gsap.from(
        '.featured__description', {
        y: -100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".featured__subtitle",
            scroller: "body",
        }
    })

    gsap.from(
        '.featured__info-container ul li', {
        x: -100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".featured__info-container",
            scroller: "body",
        }
    })

    gsap.from(
        '.featured__project-timeline', {
        y: -100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".featured__info-container",
            scroller: "body",
        }
    })


}

export default featuredAnimations;