function contactAnimation() {
    gsap.from('.contact__title', {
        x: -200,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
            "trigger": ".contact",
            "scroller": "body"
        }
    })

    gsap.from('.contact__description', {
        x: 200,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
            "trigger": ".contact",
            "scroller": "body"
        }
    })

    gsap.from('.contact__btn', {
        opacity: 0,
        delay: 1,
        duration: 1,
        scrollTrigger: {
            "trigger": ".contact",
            "scroller": "body"
        }
    })
}

export default contactAnimation;