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
            var aboutUsAnimation = 'active animated fadeInDown';
            var howWeWorkAnimation = 'active animated fadeInUp';
            var ourTeamAnimation = 'active animated flipInY';
            
            if (windowPos > (divPos*0.75) && windowPos < (divPos+divHeight)) {
                
                if(aArray[i]=='#whatWeDo')
                {
                    $(".cards").addClass(aboutUsAnimation);
                }
                
                /*else {
                    $(".cards").removeClass(animationClass);
                    console.log("removing class");
                }*/
                
                if(aArray[i]=='#howWeWork')
                {
                    $(".howWeWorkCard").addClass(howWeWorkAnimation);
                }
                
                if(aArray[i]=='#ourTeam')
                {
                    console.log("detected");
                    $(".ownerCard").addClass(ourTeamAnimation);
                }
                
                //Navbar animation
                $("a[href='"+aArray[i]+"']").addClass("activeLink");
            }

            else {
                $("a[href='"+aArray[i]+"']").removeClass("activeLink");
            }
        }
    });
    
    /*-------------------- Script for smooth scroll to links on the page ------------*/
    
    $('a[href^=#]').on('click',function(e){
        
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        $('html,body').stop().animate({'scrollTop':$target.offset().top},900,'swing');
    });
    
});




