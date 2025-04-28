function breakText() {
    // get elements
    const line1 = document.querySelector('.hero__title-1');
    const line2 = document.querySelector('.hero__title-2');

    // get text contents
    const line1Text = line1.textContent
    const line2Text = line2.textContent

    // console.log(line1Text + "'" + line2Text)

    let line1Letters, line2Letters;

    line1Letters = line1Text.split('');
    line2Letters = line2Text.split('');

    let clutter1 = "";
    let clutter2 = "";

    line1Letters.forEach((letter, idx) => {
        clutter1 += `<span id="${letter}" class="line1" ${idx}">${letter}</span>`;
    })

    line2Letters.forEach((letter, idx) => {
        clutter2 += `<span id="${letter}" class="line2" ${idx}">${letter}</span>`;
    })

    console.log(clutter1)
    console.log(clutter2)

    // Change the Html
    line1.innerHTML = clutter1
    line2.innerHTML = clutter2

    // Define rotations for random choice
    const rotations = [180, -180, 90, -90, 360, -360]


    // Animate line1 and line2

    gsap.from(".line1", {
        x: 80,
        duration: 0.5,
        opacity: 0,
        delay: 0.2,
        stagger: 0.1,
    })

    gsap.from(".line2", {
        x: -80,
        duration: 0.5,
        opacity: 0,
        delay: 0.2,
        stagger: -0.1,
    })


    gsap.from('#A', {
        rotation: getRandomChoice(rotations),
        duration: 0.3,
        delay: 1,
        repeat: -1,
        repeatDelay: 5,
    })

    gsap.from('#I', {
        rotationX: getRandomChoice(rotations),
        duration: 0.3,
        delay: 2,
        repeat: -1,
        repeatDelay: 5,
        ease: "sine.out",
    })

    // gsap.from('#&#x26', {
    //     rotation: getRandomChoice(rotations),
    //     duration: 0.3,
    //     delay: 1,
    //     repeat: -1,
    //     repeatDelay: 5,
    //     ease: "sine.out",
    // })


    gsap.from('#L', {
        rotation: getRandomChoice(rotations),
        duration: 0.3,
        delay: 2,
        repeat: -1,
        repeatDelay: 5,
    })

    gsap.from('#E', {
        rotationX: getRandomChoice(rotations),
        duration: 0.3,
        delay: 2,
        repeat: -1,
        repeatDelay: 5,
    })

    gsap.from('#R', {
        rotationX: getRandomChoice(rotations),
        duration: 0.3,
        delay: 1,
        repeat: -1,
        repeatDelay: 5,
    })

    gsap.from('#G', {
        rotation: getRandomChoice(rotations),
        duration: 0.3,
        delay: 1,
        repeat: -1,
        repeatDelay: 5,
    })

};

function getRandomChoice(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}




// gsap.from(".beforeMid", {
//     y: 80,
//     duration: 0.5,
//     opacity: 0,
//     delay: 0.2,
//     stagger: 0.1,
// })

// gsap.from(".afterMid", {
//     y: 80,
//     duration: 0.5,
//     opacity: 0,
//     delay: 0.2,
//     stagger: -0.1,
// })

// gsap.to("#o", {
//     rotation: 360,
//     duration: 2,
//     ease: "back.inout(1.7)",
// })

export default breakText;