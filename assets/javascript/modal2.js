var reviewUrl;

$(document).ready(function () {

    //show modal after clicking bite
    $('#restaurant-info')
        .modal('attach events', '#bite', 'show')
    ;


//don't center modal so that it shows properly on screen and allow scrolling
    $("#menu").on("click", function () {
        $("#restaurant-info").modal({
            centered: false
        });
        $("#restaurant-info").parent().css("overflow-y", "scroll");

    })


});

function addMenuUrl() {
    $("#menu-url").attr("href", menu);
}


function addReviews() {
    $("#review-table").empty();
        $.ajax({
            url: reviewUrl,
        headers: {
            'user-key': userKey,
            'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        //could use .then(function(reponse or data))
        success: function (response) {
            for(var i = 0; i < 5; i++){
                var rating = response.user_reviews[i].review.rating;
                var comment = response.user_reviews[i].review.review_text;
                $("#review-table").append("<tr> <td>" + rating + "</td><td>" + comment + "</td>");



            }
           console.log(response.user_reviews[1]);

        },
        //if you use .then(function(response or data)) you would use .catch(function(xml,text,error)) instead of error.
        error: function (xml, text, error) {
            console.log(xml, text, error);
        }
    });


}

