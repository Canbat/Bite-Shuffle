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

  