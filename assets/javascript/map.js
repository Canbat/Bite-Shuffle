var uluru

$("#menu-info").hide();


$("#menu").on("click", function () {
    $("#menu-info").toggle();
});


function initMap() {
    uluru = {lat: 33.8406338000, lng: -84.3694841000};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

