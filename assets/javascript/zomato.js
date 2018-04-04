alert("ZomatoAPI successfully connected!");

var userKey = "74947a847a6bedf2fed11165ada8f8b4";

// var apiUrl = "https://developers.zomato.com/api/v2.1/cuisines?city_id=35&lat=33.7490&lon=84.3880";

//Atlanta Zomato Search 
// var apiUrl = "https://developers.zomato.com/api/v2.1/search?q=atlanta";

//Global Zomato Search ---Use this one!!!
var apiUrl = "https://developers.zomato.com/api/v2.1/search?";

   $.ajax({
    url: apiUrl,
    headers: {
        'user-key': userKey,
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    //could use .then(function(reponse or data)) 
    success: function(data){
    //   console.log('succes: '+data);
    console.log(data);
    },
    //if you use .then(function(response or data)) you would use .catch(function(xml,text,error)) instead of error.
    error: function(xml,text,error){
        console.log(xml,text,error);
    }
  });

// Generating random restaurant number = R
  var R = Math.floor(Math.random() * 20) -1;
  console.log(R);
//Creating an AJAX call to randomly generate the Restaurant Name & Restarant Image.

function displayRestaurantData(){

    $.ajax({
        url: apiUrl,
        headers: {
            'user-key': userKey,
            'Content-Type':'application/json'
        },
        method: 'GET',
        dataType: 'json',
        //could use .then(function(reponse or data)) 
        success: function(data){
        
            // Storing the restaurant data(Restaurant Name, Cuisine info, User Rating, Price, Featured Image)
            var restaurant = data.restaurants[R].restaurant.name;
                var restaurantName = $('#restaurant-name').text(restaurant);
            var cuisine = data.restaurants[R].restaurant.cuisines;
            var rating = data.restaurants[R].restaurant.user_rating.aggregate_rating;
                var userRating = $('#zomato-rating').text("Bite-Rating: "+ rating);
            var price = data.restaurants[R].restaurant.price_range;
                var userRating = $('#price-scale').text(price + " out of 5" + " :" + "Price-Range " );
            var photo = data.restaurants[R].restaurant.featured_image;
                $('#restaurant-img').attr('src', photo);
            console.log(restaurant);
            console.log(cuisine);
            console.log("Bite-Rating " + rating);
            console.log("Price-Range " + price);
            console.log(photo);
        },
        //if you use .then(function(response or data)) you would use .catch(function(xml,text,error)) instead of error.
        error: function(xml,text,error){
            console.log(xml,text,error);
        }
      });


}  displayRestaurantData()

//Randomize restaurant data by looping through api restaurant array to choose restaurant based on matching cuisine selections & zipcode.



// Create jquery logic for user onClick Nope! & Bite! commands

    //Restaurant Name onClick logic


    //Cuisine data onClick logic
    

    //User Rating display


    //Average Price display