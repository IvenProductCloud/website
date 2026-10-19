(function($) {
	"use strict";	

	// $(document).ready(function(){
	// 	$(".dropdown").hover(            
	// 		function() {
	// 			$('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("normal");
	// 			$(this).toggleClass('open');        
	// 		},
	// 		function() {
	// 			$('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("normal");
	// 			$(this).toggleClass('open');       
	// 		}
	// 	);
	// });


	$("a #cntct-us").on("click", function(e){
        if("" !== this.hash){
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 1e3, function() {
                window.location.hash = t
            })
        }
	});
	
	$("a #success-stry").on("click", function(e){
        if("" !== this.hash){
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 1e3, function() {
                window.location.hash = t
            })
        }
    });
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	//Update Header Style and Scroll to Top

	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 200) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();
	
	
	//Submenu Dropdown Toggle
	if($('.main-header .navigation li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header .navigation li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}
	
	
	

	// One Item Slider	
	if ($('.one-item-carousel').length) {
		window.one = $('.one-item-carousel').owlCarousel({
			loop:true,
			mouseDrag:false,
			touchDrag:false,
			margin:0,
			dots:false,
			nav:true,
			smartSpeed: 700,
			autoplay: true,
			autoplayTimeout: 2000,
			navText: false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}
	//Three Item Slider
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop:true,
			margin:20,
			mouseDrag:false,
			dots:false,
			nav:true,
			autoplay: true,
			autoplayTimeout: 2000,
			mouseDrag:false,
			pullDrag:false,
			touchDrg:false,
			navText: false,
			rewind:false,
			startPosition: $(window).width() < 768 ? 1 : 0,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			},
			/*
			onChanged: function(e) {
				let i= e.item.index
				window.one.trigger("to.owl.carousel",[i,100])
				console.log(i)
			}
			*/
		});    		
	}
	
	
	if ($('.test-item-carousel').length) {
		$('.test-item-carousel').owlCarousel({
			loop:true,
			mouseDrag:true,
			margin:0,
			dots:true,
			smartSpeed: 700,
			autoplay: true,
			rewindNav:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

	//Six Item Slider
	if ($('.five-partner-slider').length) {
		$('.five-partner-slider').owlCarousel({
			loop:true,
			mouseDrag:false,
			dots:false,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 3000,
			navText: false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});    		
	}

	//Six Item Slider
	if ($('.six-item-carousel').length) {
		$('.six-item-carousel').owlCarousel({
			loop:true,
			mouseDrag:true,
			margin:0,
			dots:false,
			nav:true,
			smartSpeed: 800,
			autoplay: true,
			autoplayTimeout: 4500,
			navText: false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});    		
	}
	$(function() {
		$('.scroll-to-target').bind('click', function(event) {
			var topPoint = $($(this).attr('href')).offset().top;
			$('html, body').stop().animate({
				scrollTop: topPoint
			},
			1500, 
			'easeInOutExpo');
			event.preventDefault();
		});
	});
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});

})(window.jQuery);


/* ==========================================================================
		NAVBAR
   ========================================================================== */
function toggler(x) {
	x.classList.toggle("change");
}
window.onload = function () {
	document.getElementById("hamburger").addEventListener("click", function() {
		document.getElementById("headr-navi").className = document.getElementById("headr-navi").className == 'visiblee' ? 'hiddenn' : 'visiblee';
	})
};

window.addEventListener("scroll", function(e) {
    document.querySelector("header").style.boxShadow = `0 0 0.25rem ${window.scrollY > 5 ? "#9DA5AB" : "transparent"}`;
});

/* ==========================================================================
		MAIL SUBSCRIPTION
   ========================================================================== */
$('form[name="subscribe"]').submit(function(event) {
    event.preventDefault();

    var form = $(this);

    var email = form.find('input[name="email"]').val();

    var submitButton = form.find('button[type="submit"]');
    var currentHTML = submitButton.html();

	//FIRST CHECK IF USER IS ON THE LIST ALREADY
	$.ajax({
        url: 'mailchimp.php',
        type: 'POST',
        data: {
            action: 'checklist',
            email: email
        },
        beforeSend: function(request) {
            submitButton.html('<i class="fa fa-circle-o-notch fa-spin"></i>');
            submitButton.attr('disabled', true);
        },
        success: function(data) {

            //IF ALREADY SUBSCRIBED, WARN USER
            if(data === 'subscribed') {
                alert('You have already subscribed to our newsletter. Thank you!');
            }
            //SUBSCRIBE USER
            else {

                var jsonBody = {
                    action: 'subscribe',
                    email: email
                };

                var firstName = form.find('input[name="firstName"]').val();

                if(firstName) {
                    jsonBody.fname = firstName;
                }

                var lastName = form.find('input[name="lastName"]').val();

                if(lastName) {
                    jsonBody.lname = lastName;
                }

                $.ajax({
                    url: 'mailchimp.php',
                    type: 'POST',
                    data: jsonBody,
                    beforeSend: function(request) {
                        submitButton.html('<i class="fa fa-circle-o-notch fa-spin"></i>');
                        submitButton.attr('disabled', true);
                    },
                    success: function(data) {
                        alert('Thank you for subscribing to our newsletter!');
                    },
                    error: function(error) {
                        alert('An unexpected error occured while subscribing. Please try again later...');
                    },
                    complete: function() {
                        submitButton.html(currentHTML);
                        submitButton.attr('disabled', false);
                    }
                })
            }
        },
        error: function(error) {
            alert('An unexpected error occured while subscribing. Please try again later...');
        },
        complete: function() {
            submitButton.html(currentHTML);
            submitButton.attr('disabled', false);
        }
	})
});

//WEBSOCKET

/* 
if (window.location.hostname === "localhost") {
    new WebSocket(`ws://${window.location.host}`).onmessage = function (e) {
        return window.location.reload(true);
    }
}
*/