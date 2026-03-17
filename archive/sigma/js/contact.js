  function init_map(){
    var stylesArray = [
      {"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},
      {"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},
      {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},
      {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
      {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},
      {"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},
      {"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},
      {"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},
      {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
      {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
      {"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},
      {"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},
      {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},
      {"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
      {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
      {"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},
      {"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},
      {"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
    var varLatLng = '40.4397, -79.9764';
    var myOptions = {
      zoom:14,
      center:new google.maps.LatLng(40.441415, -79.997022),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      scrollwheel: false,
      panControl: false,
      zoomControl: false,
      disableDefaultUI: true,
      scaleControl: true,
      overviewMapControl: false,
      zoomControlOptions: {
        style: google.maps.MapTypeControlStyle.SMALL,
        postion: google.maps.ControlPosition.TOP_LEFT
      },
    };
    map = new google.maps.Map(document.getElementById("map-jd"), myOptions);
    map.setOptions({styles: stylesArray});
    var pinLocation = new google.maps.LatLng(40.441415, -79.997022);
    var marker = new google.maps.Marker({
      map: map,
      position: pinLocation,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "http://www.joeldombek.com/blog/wp-content/themes/15-redesign/img/map-pin.png",
        scaledSize: new google.maps.Size(30, 46) // pixels
      }
    });
    var contentString = '<span style="font-family:Helvetica, Arial, sans-serif !important; border-radius:1px !important;color:#222;">'+
    'I currently live &amp; work in the<br/>beautiful city of Pittsburgh.</span>';
    var infowindow = new google.maps.InfoWindow({ content: contentString });
    google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});}
    google.maps.event.addDomListener(window, 'load', init_map);
    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });
