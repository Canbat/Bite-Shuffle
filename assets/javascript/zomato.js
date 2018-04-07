var lat;
var lng;
var restaurantLat;
var restaurantLng;
var menu;
var resID;
var userKey = "74947a847a6bedf2fed11165ada8f8b4";

// var apiUrl = "https://developers.zomato.com/api/v2.1/cuisines?city_id=35&lat=33.7490&lon=84.3880";

//Atlanta Zomato Search 
// var apiUrl = "https://developers.zomato.com/api/v2.1/search?q=atlanta";

//Global Zomato Search ---Use this one!!!

var apiUrl;

//    $.ajax({
//     url: apiUrl,
//     headers: {
//         'user-key': userKey,
//         'Content-Type':'application/json'
//     },
//     method: 'GET',
//     dataType: 'json',
//     //could use .then(function(reponse or data)) 
//     success: function(data){
//     //   console.log('succes: '+data);
//     console.log(data);
//     },
//     //if you use .then(function(response or data)) you would use .catch(function(xml,text,error)) instead of error.
//     error: function(xml,text,error){
//         console.log(xml,text,error);
//     }
//   });


// Generating random restaurant number = R
var R = Math.floor(Math.random() * 20) - 1;
console.log(R);

//Creating an AJAX call to randomly generate the Restaurant Name & Restarant Image.

function displayRestaurantData() {
    reviewUrl = "https://developers.zomato.com/api/v2.1/reviews?res_id=" + resID;

    $.ajax({
        url: apiUrl,
        headers: {
            'user-key': userKey,
            'Content-Type': 'application/json'
        },
        method: 'GET',
        dataType: 'json',
        //could use .then(function(reponse or data)) 
        success: function (data) {

            // Storing the restaurant data(Restaurant Name, Cuisine info, User Rating, Price, Featured Image)
            var restaurant = data.restaurants[R].restaurant.name;
            var restaurantName = $('.restaurant-name').text(restaurant);

            var cuisine = data.restaurants[R].restaurant.cuisines;

            var rating = data.restaurants[R].restaurant.user_rating.aggregate_rating;
            var userRating = $('#zomato-rating').text("Bite-Rating: " + rating);

            var price = data.restaurants[R].restaurant.price_range;
            var userRating = $('#price-scale').text(price + " out of 5" + " :" + "Price-Range ");

            var photo = data.restaurants[R].restaurant.featured_image;

            if (photo == "") {
                $('#restaurant-img').attr('src', "assets/images/biteshuffle.png");
            }
            else {
                $('#restaurant-img').attr('src', photo);
            }
            restaurantLat = data.restaurants[R].restaurant.location.latitude;
            restaurantLng = data.restaurants[R].restaurant.location.longitude;
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: restaurantLat, lng: restaurantLng},
                zoom: 8
            });

            resID = data.restaurants[R].restaurant.R.res_id;
            reviewUrl = "https://developers.zomato.com/api/v2.1/reviews?res_id=" + resID;
            menu = data.restaurants[R].restaurant.menu_url;
            addMenuUrl();
            addReviews();



            console.log(data.restaurants[R].restaurant.R.res_id);
            console.log(restaurant);
            console.log(cuisine);
            console.log("Bite-Rating " + rating);
            console.log("Price-Range " + price);
            console.log(photo);

            console.log(restaurantLat);
            console.log(restaurantLng);

            console.log(data);

            console.log(menu);

        },
        //if you use .then(function(response or data)) you would use .catch(function(xml,text,error)) instead of error.
        error: function (xml, text, error) {
            console.log(xml, text, error);
        }
    });


}


//Randomize restaurant data by looping through api restaurant array to choose restaurant based on matching cuisine selections & zipcode.

$(document).ready(function () {


    $("#search").on("click", function () {
        apiUrl = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lng;
        R = Math.floor(Math.random() * 20) - 1;
        console.log('search');
        displayRestaurantData();
        initMap();



    });

    $('#nope').on("click", function () {
        apiUrl = "https://developers.zomato.com/api/v2.1/search?lat=" + lat + "&lon=" + lng;
        R = Math.floor(Math.random() * 20) - 1;
        console.log('nope');
        displayRestaurantData();
        initMap();


    })



});



// Create jquery logic for user onClick Nope! & Bite! commands

//Restaurant Name onClick logic


//Cuisine data onClick logic


//User Rating display


//Average Price display

    
