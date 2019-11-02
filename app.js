const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
const section = document.querySelector('section');
const end = section.querySelector('h1');

const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    duration: 4000,
    triggerElement: intro,
    triggerHook: 0
}).addIndicators().setPin(intro).addTo(controller);

const textAnimation = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene({
    duartion: 1000,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnimation).addTo(controller);

let scrollPos = 0;
scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
})
setInterval(() => {
    video.currentTime = scrollPos;
}, 33.3);
