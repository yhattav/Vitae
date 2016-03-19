var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate1', {scale: 1.00, top: -100}).setPin('#animate1')
.addIndicators({name: "scene one duration"})
.addTo(controller);

var scene2 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate2', {scale: 1.00, top: -500, left: 200}).setPin('#animate2')
.addIndicators({name: "scene 2-no "})
.addTo(controller);


var scene3 = new ScrollMagic.Scene({
    duration: 3000
}).setTween('#animate3', {scale: 1.00, top: 300}).setPin('#animate3')
.addIndicators({name: "scene 3 duration"})
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
							triggerElement: "#trigger1", offset: 50, //triggerHook: 1
						})
						.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                       
                        $('.singlecontainer').html(text);
                        $('.singlecontainer').addClass("animated fadeIn");
                        
                        setTimeout( function () {$('.singlecontainer').removeClass("fadeIn")} , 300);
                        console.log("passed trigger1");       
})
                     //   .setTween('#trigger1',5, { scale: 1})
						.addIndicators({name: "scene 4 duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

var scene5 = new ScrollMagic.Scene({
							triggerElement: "#trigger2", offset: 50
						})
.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                       
                        $('.singlecontainer').html(text);
                        $('.singlecontainer').addClass("animated fadeIn");
                        
                        setTimeout( function () {$('.singlecontainer').removeClass("fadeIn")} , 300);
                        console.log("passed trigger2");       
})
                     //   .setTween('#trigger2',5, { scale: 0.9})
						.addIndicators({name: "scene 5duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
                        
var scene6 = new ScrollMagic.Scene({
							triggerElement: "#trigger3", offset: 50
						})
.on('start', function () { 
                        var text = $(this.triggerElement()).html();
                       
                        $('.singlecontainer').html(text);
                        $('.singlecontainer').addClass("animated fadeIn");
                        
                        setTimeout( function () {$('.singlecontainer').removeClass("fadeIn")} , 300);
                        console.log("passed trigger3");       
})
                        //.setTween('#trigger3',5, { scale: 0.7})
						.addIndicators({name: " scene 6 duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

var scene6 = new ScrollMagic.Scene({
							triggerElement: "#trigger4", offset: 50
						})
                        .on('start', function () { 
                           var text = $(this.triggerElement()).html();
                       
                         $('.singlecontainer').html(text);
                            $('.singlecontainer').addClass("animated fadeIn");
                        
                          setTimeout( function () {$('.singlecontainer').removeClass("fadeIn")} , 300);
                            console.log("passed trigger4");       
                        })
                      //  .setTween('#trigger4',5, { scale: 0.6})
						.addIndicators({name: " scene 7 duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

var scene6 = new ScrollMagic.Scene({
							triggerElement: "#trigger5", offset: 50
						})
                        .on('start', function () { 
                            var text = $(this.triggerElement()).html();
                       
                            $('.singlecontainer').html(text);
                            $('.singlecontainer').addClass("animated fadeIn");
                        
                            setTimeout( function () {$('.singlecontainer').removeClass("fadeIn")} , 300);
                            console.log("passed trigger5");       
                        })
                    //    .setTween('#trigger5',5 , { scale: 0.5})
						.addIndicators({name: " scene 8 duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
                        
                        $(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 380,	y: 20},
						{x: 500,	y: 60},
						{x: 580,	y: 20},
						{x: 620,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 660,	y: 20},
						{x: 800,	y: 130},
						{x: $(window).width() + 300,	y: -100},
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#star"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#star"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#star"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#triggerstar", duration: 500, offset: 100})
						.setPin("#target")
                        .on('start', function () {$('#star').removeClass('noshow');})
						.setTween(tween)
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
	})