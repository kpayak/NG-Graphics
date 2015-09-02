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
    
    /* Owner card hover effect */
       
    $(".materialCard")
    .mouseenter(function () {
        //var card = $(this).parent().parent();      
        $(this).addClass('active');
    })
    .mouseleave(function(){
        $(this).removeClass('active');
    });

    /*------ Script to mark sections on vertical scroll ----*/

    //Get all hrefs from navbar
    var navLi = $(".navbarRow li").children();
    var aArray = [];

    //Running for loop to (len-1) to get rid of LOGIN a href
    for(var i=0; i<(navLi.length)-1; i++) {
        aArray.push($(navLi[i]).attr('href'));
    }
    
    $(window).scroll ( function () {
        var windowPos = $(window).scrollTop();
        for (var i=0; i<aArray.length; i++) {
            var divPos = $(aArray[i]).offset().top;
            var divHeight = $(aArray[i]).height();

            if (windowPos > divPos && windowPos < (divPos+divHeight)) {
                $("a[href='"+aArray[i]+"']").addClass("activeLink");
            }

            else {
                $("a[href='"+aArray[i]+"']").removeClass("activeLink");
            }
        }
    });
});




