$(document).ready(function () {
    $('#landing-modal')
        .modal('setting', 'closable', false)
        .modal('show')

    $.ajax({
        url: "https://ipapi.co/json/",
        method: "GET"
    })
    .then(function(response){
        $("#zipcode").val(response.postal);
        lat = response.latitude;
        lng = response.longitude;
        initMap();
    })

});


