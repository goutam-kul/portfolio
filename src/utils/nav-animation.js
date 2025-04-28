function navAnimations() {
    gsap.from("nav ul, nav li", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "expoScale(0.5,7,none)",
        stagger: 0.1,
    })

}

export default navAnimations;