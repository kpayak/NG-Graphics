$(document).ready(function(){    
    $(window).scroll(function() {

        if ($(document).scrollTop() > 400) {
            $('.navbarRow').addClass('sticky');
            $('.mobileNavBar').addClass('sticky');
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
    //var card = $(this).parent().parent();      
    $(this).addClass('active');
})
.mouseleave(function(){
    console.log("leaving");
    $(this).removeClass('active');
});

// Script to mark sections on vertical scroll

$(".whatWeDo").mouseenter ( function() {
    console.log("entered what we do");
});

$(".whatWeDo").mouseleave ( function() {
    console.log("leaving what we do");
});


