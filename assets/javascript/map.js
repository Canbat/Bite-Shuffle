var lat = -25.363;
var lng = 131.044;


$("#menu-info").hide();


$("#menu").on("click", function () {
    $("#menu-info").toggle();
});


function initMap() {
    var uluru = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

$(document).ready(function(){

})