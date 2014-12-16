function drawMap(canvasID, config) {
    var mapOptions = {
        center: new google.maps.LatLng(config.center[0], config.center[1]),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
            document.getElementById(canvasID),
            mapOptions);
    
    var position;
    for (var i=0; i<config.positions.length; i++) {
        position = config.positions[i];
        new StyledMarker({
            styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, {color: "EEEEEE", text: position.label}),
            position: new google.maps.LatLng(position.latlng[0], position.latlng[1]),
            map: map});
    }
};

$(document).ready(function(){
            $( "#tabs" ).tabs();
            var options = {
                $AutoPlay: true,
                $AutoPlayInterval: 4000,
                $SlideDuration: 500,
                $DragOrientation: 3,
                $UISearchMode: 0,
                $FillMode: 1,

                $ThumbnailNavigatorOptions: {
                    $Class: $JssorThumbnailNavigator$, 
                    $ChanceToShow: 2,

                    $Loop: 2,
                    $SpacingX: 3,
                    $SpacingY: 3,
                    $DisplayPieces: 6,
                    $ParkingPosition: 204,

                    $ArrowNavigatorOptions: {
                        $Class: $JssorArrowNavigator$,
                        $ChanceToShow: 2,
                        $AutoCenter: 2,
                        $Steps: 6
                    }
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$ScaleWidth(Math.min(parentWidth, 720));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
            
            var copernicus = {
                label: 'Ceremony',
                latlng: [41.968071, -87.758610]
            };

            var jeffersonCTA = {
                label: 'Jefferson Park CTA Station',
                latlng: [41.969880, -87.761852]
            };

            drawMap('map', {
                center: [41.968811, -87.759883],
                positions: [copernicus, jeffersonCTA]
            });
        });
