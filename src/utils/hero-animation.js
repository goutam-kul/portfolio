function heroAnimations() {

    // const heroSubtitle = document.querySelector('.hero__subtitle');

    // console.log(heroSubtitle)

    // let heroSubtitleText = heroSubtitle.textContent;

    // let heroSubLetters = heroSubtitleText.split(" ");

    // console.log(heroSubLetters)

    // let buffer = ""

    // heroSubLetters.forEach((letter, idx) => {
    //     buffer += `<span id="${letter}" class="letters">${letter}</span> `
    // })

    // console.log(buffer)

    // heroSubtitle.innerHTML = buffer

    // console.log(heroSubtitle)

    // gsap.from('.hero__img', {
    //     opacity: 0,
    //     duration: 1,
    //     delay: 0.3,

    // })

    gsap.from(".hero, h2 img", {
        opacity: 0,
        delay: 0.3,
        duration: 2,
        stagger: 0.1,
    })

}

export default heroAnimations;