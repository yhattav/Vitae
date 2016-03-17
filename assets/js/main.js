var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    triggerElement: '#trigger1'
}).setTween('#animate1', 2, {backgroundColor: 'green', scale: 2.5})
.addIndicators({name: "1-no duration"})
.addTo(controller);
document.('.mainpage').style.backgroundImage = "url('../images/Aurora-Ocean2.jpg')";