var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '#trigger1', duration: 300
}).setTween('#animate1', 2, {backgroundColor: 'green', scale: 2.5})
.addIndicators({name: "1-no duration"})
.addTo(controller);
