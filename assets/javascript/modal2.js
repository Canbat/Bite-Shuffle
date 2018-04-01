$(document).ready(function () {
    $('#restaurant-info')
        .modal('attach events', '#bite', 'show')
    ;
    $("#menu-info").hide();

    $("#menu").on("click", function(){
        $("#restaurant-info").modal({
            centered: false
        });
        $("#menu-info").toggle();
        $("#restaurant-info").parent().css("overflow-y", "scroll");

    })


})