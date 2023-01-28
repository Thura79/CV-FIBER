import './node_modules/bootstrap/dist/js/bootstrap';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';


let typed = new Typed('.element', {
    strings: ["Protfolio in minutes", "Scalable Website in minutes"],
    typeSpeed: 130,
    backDelay: 300,
    backSpeed: 150,
    loop: true,
    loopCount: Infinity,

  });

  var right = {
    distance: '700px',
    origin: 'right',
    opacity: true,
    delay: 375,
    duration: 300,
    // reset: true
};

ScrollReveal().reveal('.right', right);


var left = {
    distance: '700px',
    origin: 'left',
    opacity: true,
    delay: 375,
    duration: 300,
    // reset: true
};

ScrollReveal().reveal('.left', left);

var bottom = {
    distance: '1500px',
    origin: 'left',
    opacity: null,
    delay: 375,
    duration: 200,
    // reset: true,
    interval: 600
};

ScrollReveal().reveal('.bottom', bottom);