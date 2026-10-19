$(document).ready(function(){
    $('.outerWrap .span3').click(function(){
        $('.outerWrap .span3').removeClass('activeTab');
        $(this).addClass('activeTab')
    }),
    $('.closeBtn').click(function(event){
        event.stopPropagation();
        $('.outerWrap .span3').removeClass('activeTab');
    })
});

$(document).ready(function() {
    if($())
});
