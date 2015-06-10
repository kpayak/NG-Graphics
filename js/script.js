var map;

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
        
    /* MAPS */
    map = new GMaps({
      div: '.map',
      lat: 22.7281031,
      lng:75.8532572        
        
    });
    
    });


