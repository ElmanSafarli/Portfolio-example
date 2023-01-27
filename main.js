var $page = $('html, body');

$('a[href*="#"]').click(function(){
    $page.animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 400);
    return false;
});

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    })

});

$(document).ready(() => {
    $('#menu').click(() =>{
        $('#active').toggleClass('active')
    })
})
 
// Talk with me Button form

$(document).ready(() => {
    $("#formButton").click(() => {
      $("#form1").slideToggle();
    });
});

