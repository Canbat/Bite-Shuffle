


$(document).ready(function () {

    //show modal after clicking bite
    $('#restaurant-info')
        .modal('attach events', '#bite', 'show')
    ;



//don't center modal so that it shows properly on screen and allow scrolling
    $("#menu").on("click", function(){
        $("#restaurant-info").modal({
            centered: false
        });
        $("#restaurant-info").parent().css("overflow-y", "scroll");

    })



});

function addMenuUrl(){
    $("#menu-url").attr("href", menu);
}
