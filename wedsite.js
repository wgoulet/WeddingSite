function drawMap(canvasID, config) {
    map = new google.maps.Map(document.getElementById(canvasID),{
        center: new google.maps.LatLng(config.center[0], config.center[1]),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP});
    
    for (var i=0; i<config.positions.length; i++) {
        var position = config.positions[i];
        new StyledMarker({
            styleIcon: new StyledIcon(StyledIconTypes.BUBBLE, {color: "EEEEEE", text: position.label}),
            position: new google.maps.LatLng(position.latlng[0], position.latlng[1]),
            map: map});
    }
};

$(document).ready(function(){
    var copernicus = {
        label: 'Ceremony',
        latlng: [41.968071, -87.758610]
    };

    var jeffersonCTA = {
        label: 'Jefferson Park CTA Station',
        latlng: [41.969880, -87.761852]
    };
    
    var map;
    $('a[href="#location"]').on("shown.bs.tab", function (e) {
        if( map == undefined) {
            drawMap('map', {
                center: [41.968811, -87.759883],
                positions: [copernicus, jeffersonCTA]
            });
        }
    });
});
