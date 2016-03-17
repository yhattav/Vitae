var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate1', {scale: 1.03}).setPin('#animate1')
.addIndicators({name: "1-no duration"})
.addTo(controller);
var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate2', {scale: 1.06, top: 400, left: 300}).setPin('#animate2')
.addIndicators({name: "2-no "})
.addTo(controller);
