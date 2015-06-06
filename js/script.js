$(document).ready (
    function() {    
    
    /* For the sticky navigation */
    $('.js--what-we-do').waypoint(function(direction)    
    {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px;'
    });
    
    });