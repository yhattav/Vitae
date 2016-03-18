var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate1', {scale: 1.00, top: -100}).setPin('#animate1')
.addIndicators({name: "1-no duration"})
.addTo(controller);
var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate2', {scale: 1.00, top: -2000, left: 200}).setPin('#animate2')
.addIndicators({name: "2-no "})
.addTo(controller);
