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
        zoom: 15,
      lat: 22.7263872,
      lng:75.8638627          
    });
        
    map.addMarker({
        lat: 22.7263872,
        lng:75.8638627,          
        title: 'NG Graphics',
        infoWindow: {
            content: '<p>NG Graphics<br>11/2 Snehlataganj, Indore<br>Madhya Pradesh, 452010<br>Ph:98260-32486<\p>'
        }
    });

    
    });


