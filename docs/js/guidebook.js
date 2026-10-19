$(function(){
    "use strict"
    $(window).scroll(function() {
        var e = $(".navbar");
        $(window).scrollTop() >= e.height() ? e.addClass("scrolled") : e.removeClass("scrolled")
    }),
    $(".navbar-toggle").on("click", function() {
        $(".navbar-toggle").toggleClass("change")
    }),
    $("body").scrollspy({
        target: ".navbar",
        offset: 50
    }),
    $("#menuicon a").on("click", function(e) {
        if ("" !== this.hash) {
            e.preventDefault();
            var t = this.hash;
            $("html, body").animate({
                scrollTop: $(t).offset().top
            }, 1e3, function() {
                window.location.hash = t
            })
        }
    }),

    function toggler(x) {
        x.classList.toggle("change");
    }
    window.onload = function () {
        document.getElementById("hamburger").addEventListener("click", function() {
            document.getElementById("headr-navi").className = document.getElementById("headr-navi").className == 'visiblee' ? 'hiddenn' : 'visiblee';
        })
    }

    if($('.test-item-carousel').length > 0) {
        $('.test-item-carousel').owlCarousel({
            loop:true,
            mouseDrag:true,
            dots:true,
            smartSpeed: 700,
            autoplay: 1000,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
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

    $("#scroll-down").on("click", function() {
        $("html,body").animate({
            scrollTop: $("#cards-benefit").offset().top
        }, 1e3)
    });

    window.addEventListener("scroll", function(e) {
        document.querySelector("header").style.boxShadow = `0 0 0.25rem ${window.scrollY > 5 ? "#9DA5AB" : "transparent"}`;
    });
    
});









