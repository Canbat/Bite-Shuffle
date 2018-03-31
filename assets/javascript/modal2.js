$(document).ready(function () {
    $('#restaurant-info')
        .modal('attach events', '#bite', 'show')
    ;
    $("#menu-info").hide();

    $("#menu").on("click", function(){
        $("#menu-info").toggle();
    })
})