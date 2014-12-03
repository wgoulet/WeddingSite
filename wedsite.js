
$(document).ready(function(){
            $( "#tabs" ).tabs();
            console.log("ready!");
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
        });
