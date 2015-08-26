$(document).ready(function(){    
    $(window).scroll(function() {

        if ($(document).scrollTop() > 400) {
            $('.navbarRow').addClass('sticky');
        }
        
        else {
            $('.navbarRow').removeClass('sticky');
        }
    });
});

$(".descButton").click(function () {
    var card = $(this).parent().parent();
    
    if (card.hasClass('active')) {
        card.removeClass('active');
    }
    
    else {
        card.addClass('active');
    }
    
    });

/*function Scroll () {
    var ytop = window.pageYOffset;
    var nav = document.getElementById('navbarRow');
    
    if (ytop > 500)
    {
        nav.addClass('sticky');
    }
    
    else {
        nav.removeClass('sticky');
    }
}

window.addEventListener("scroll",Scroll);*/



