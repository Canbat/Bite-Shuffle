$(document).ready(function () {
    $('#landing-modal')
        .modal('setting', 'closable', false)
        .modal('show');
    $(".dimmer").css("background-color","rgba(255,69,0)");

    $.ajax({
        url: "https://ipapi.co/json/",
        method: "GET"
    })
        .then(function (response) {
            $("#zipcode").val(response.postal);
            lat = response.latitude;
            lng = response.longitude;

        })
});


