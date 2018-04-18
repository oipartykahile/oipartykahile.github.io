var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

$('#party-palace-carousel').on('slide.bs.carousel', function(e) {
    console.log(e.relatedTarget.id);
    $('#carousel-text-1').css('display', 'none');
    $('#carousel-text-2').css('display', 'none');
    $('#carousel-text-3').css('display', 'none');
    if(e.relatedTarget.id == 1) {
        $('#carousel-text-1').css('display', 'block');
    } else if (e.relatedTarget.id == 2) {
        $('#carousel-text-2').css('display', 'block');
    } else if (e.relatedTarget.id == 3) {
        $('#carousel-text-3').css('display', 'block');
    }
});

