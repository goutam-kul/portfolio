function aboutAnimations() {
    gsap.from('.about__title, .about__description, .about__hr, .about__subtitle', {
        x: -100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about__content",
            scroller: "body",
        }
    })


    gsap.from('.about__img-wrapper, about__img', {
        x: 100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about__content",
            scroller: "body",
        }
    })

    gsap.from('.about__ul li', {
        y: 100,
        delay: 0.5,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".about__ul",
            scroller: "body",
        }
    })

}

export default aboutAnimations;