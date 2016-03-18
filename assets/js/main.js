var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate1', {scale: 1.00, top: -100}).setPin('#animate1')
.addIndicators({name: "1-no duration"})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate2', {scale: 1.00, top: -2000, left: 200}).setPin('#animate2')
.addIndicators({name: "2-no "})
.addTo(controller);


var scene3 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate3', {scale: 1.00, top: 300}).setPin('#animate3')
.addIndicators({name: "1-no duration"})
.addTo(controller);

//var first = function() {
  //  var text = $('#trigger1').html();
    //$('.singlecontainer').html(text);
    
//}
//var textChange = function () { 
 //                       var text = $(this.triggerElement()).html();
 //                       $('.singlecontainer').html(text);
 //                       console.log("passed trigger");
//}

var scene4 = new ScrollMagic.Scene({
							triggerElement: "#trigger1", offset: 50, triggerHook: 0.7
						})
						.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                        $('.singlecontainer').html(text);
                        console.log("passed trigger1");
                        })
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

var scene5 = new ScrollMagic.Scene({
							triggerElement: "#trigger2", offset: 50
						})
						.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                        $('.singlecontainer').html(text);
                        console.log("passed trigger2");
                        })
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
                        
var scene6 = new ScrollMagic.Scene({
							triggerElement: "#trigger3", offset: 50
						})
						.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                        $('.singlecontainer').html(text);
                        console.log("passed trigger3");
                        })
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);