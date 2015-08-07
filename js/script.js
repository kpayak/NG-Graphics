$(".descButton").click(function () {
    console.log("detected click");
    var card = $(this).parent().parent();
    var hamBar = 
    
    if (card.hasClass('active')) {
        card.removeClass('active');
    }
    
    else {
        card.addClass('active');
    }
    
    /* script for hambar animation
    
    });



