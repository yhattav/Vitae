var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.scene({
    triggerElement: '#trigger1'
}).setTween('#animate1', 0.5, {backgroundColor: 'green', scale: 2.5})
.addIndicators({name: "1-no duration"})
.addTo(controller);
