/*
 *****************************************************
 *	CUSTOM JS DOCUMENT                              *
 *	Single window load event                        *
 *   "use strict" mode on                            *
 *****************************************************
 */
$(window).on("load", function() {

    "use strict";

    var preloderLoading = $('#loading');
    var fancybox = $('.fancybox');
    var faq = $('#faq');
    var comingSoonTimer = $('#coming-soon-timer');
	var counter = $('.counter');
    var fancyboxIframe = $('.fancybox-iframe');
	var searchpopup = $('.serach-popup-box');
	var addClassess = $("#addClass");
    var removeClasses = $("#removeClass");
    var animatedPopup = $("#qnimate");
	var accordionFAQ = $("#accordion");

    // ============================================
    // PreLoader On window Load
    // =============================================
  
	
	
	if (preloderLoading.length){
		preloderLoading.delay().fadeOut();

	}
    //========================================
   // Search Popup Setting
   //========================================
   

    if (searchpopup.length) {
        $(function() {
            addClassess.on('click', function() {
                animatedPopup.addClass('popup-box-on');
            });

            removeClasses.on('click', function() {
                animatedPopup.removeClass('popup-box-on');
            });
        })
    }

	//========================================
    // Counter
    //======================================== 	
	counter.appear(function() {
	counter.each(function() {
		  var $this = $(this),
			  countTo = $this.attr('data-count');
		  
		  $({ countNum: $this.text()}).animate({
			countNum: countTo
		  },

		  {

			duration: 8000,
			easing:'linear',
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			  //alert('finished');
			}

		  });  
		  
	  

});
});	
    //========================================
    // LightBox / Fancybox
    //======================================== 	

    if (fancybox.length) {
        fancybox.fancybox();
    }



    //========================================
    // FAQ Accordion Calling
    //======================================== 

    if (accordionFAQ.length) {
        accordionFAQ.accordion();
    }


    //========================================
    // Owl Carousel functions Calling
    //======================================== 	

    owlCarouselInit();

    //========================================
    // Comming Soon Timer function Calling
    //======================================== 

    if (comingSoonTimer.length) {
        comingsoonInt();
    }


});
	//***************************************
	// Map initialization function Calling
	//****************************************
 
	initMap();


//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {

    "use strict";

    //========================================
    // owl carousels settings
    //======================================== 		
    var mainSlider = $('#main-slider');
    var testimonialS = $('#testimonial');
    var partenerSlider = $('#partner-slider');
    var comingSoonSilder = $('.carousel');
    var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
    var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';

    if (mainSlider.length) {
        mainSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

     if (testimonialS.length) {
        testimonialS.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            navText: [prevNav, nextNav],
            dots: false,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    }


    if (partenerSlider.length) {
        partenerSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

    }
	
	
//========================================
// Coming Soon Timer Bootstrap Carousel
//======================================== 	

    if (comingSoonSilder.length) {
        comingSoonSilder.carousel({
            interval: 3000
        });
    }
 
}

//========================================
//Coming Soon Timer functions
//======================================== 	

function comingsoonInt() {

    "use strict";

    // Set the date we're counting down to
    var countDownDate = new Date("DEC 31, 2017 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("minutes").innerHTML = minutes;


    }, 1000);

}

 
 
 
//***************************************
// Contact Page Map
//****************************************  

 function initMap() {
  "use strict";
 
   var mapDiv = $('#gmap_canvas'); 
   
   if (mapDiv.length) {  
     var myOptions = {
         zoom: 10,
   scrollwheel: false,
         center: new google.maps.LatLng(-37.81614570000001, 144.95570680000003),
         mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     var map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
     var marker = new google.maps.Marker({
         map: map,
         position: new google.maps.LatLng(-37.81614570000001, 144.95570680000003)
     });
     var infowindow = new google.maps.InfoWindow({
         content: '<strong>Envato</strong><br>Envato, King Street, Melbourne, Victoria<br>'
     });
     google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map, marker);
     });
  
     infowindow.open(map, marker);
   }
   
 }


/*
 *****************************************************
 *	END OF THE JS 									*
 *	DOCUMENT                       					*
 *****************************************************
 */