# BITESHUFFLE - https://canbat.github.io/Bite-Shuffle/

## Introduction

> - Honey, what’s for dinner?
- What are we going to eat?
- What’s for lunch?

Are questions of the past with Biteshuffle.  Biteshuffle takes your food preferences & searches and submits a recommended random dining option.  The user can skip the random recommended option and continues to loop through random dining options.

## Code Samples

> We used Semantic UI, Zomato API, Google Location API and Material UI design to create BITESHUFFLE!  Check out some of our zomato API call code below:

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

## Installation

> Coming soon to an APP Store near you!

