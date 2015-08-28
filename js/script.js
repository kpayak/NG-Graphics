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

/*$(".descButton").click(function () {
    var card = $(this).parent().parent();
    
    if (card.hasClass('active')) {
        card.removeClass('active');
    }
    
    else {
        card.addClass('active');
    }
    
    });*/

$(".materialCard")
.mouseenter(function () {
    console.log("detected hover");
    //var card = $(this).parent().parent();      
    $(this).addClass('active');
})
.mouseleave(function(){
    console.log("leaving");
    $(this).removeClass('active');
});


