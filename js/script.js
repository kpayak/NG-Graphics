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
        zoom: 13,
      lat: 22.7263872,
      lng:75.8638627          
    });
        
    /*map.addMarker({
      lat: 22.7263872,
      lng:75.8638627          
      title: 'Lima',
      click: function(e) {
        alert('You clicked in this marker');
      }
    });*/

    
    });


