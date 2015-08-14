$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(".descButton").click(function () {
    console.log("detected click");
    var card = $(this).parent().parent();
    
    if (card.hasClass('active')) {
        card.removeClass('active');
    }
    
    else {
        card.addClass('active');
    }
    
    });

$(".contactIcon").hover ( function() {
    console.log("hover detected");
    this.css("box-shadow", "5px 5px 10px black");
});



