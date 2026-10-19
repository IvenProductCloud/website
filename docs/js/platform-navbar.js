if ($(window).width() > 960){
    $(function() {
        $(window).scroll(function() {
            $('#header-menu').toggleClass('afterScroll', $(this).scrollTop() > 5);
            $('.headr').toggleClass('scroll', $(this).scrollTop() > 5);
            $('#signin').toggleClass('signin-navbar', $(this).scrollTop() > 5);
            $('#signin:hover').toggleClass('scroll', $(this).scrollTop() > 5);
            $('#headr-navi li').children('a').toggleClass('scroll', $(this).scrollTop() > 5);
            $('#headr-navi li').children('a').toggleClass('scroll', $(this).scrollTop() > 5);
            $('#headr-navi li').children('a').toggleClass('scroll', $(this).scrollTop() > 5);
            $('#headr-navi li').children('button').toggleClass('scroll', $(this).scrollTop() > 5);
        })
    });
}