function processReastaurantSearch(incomingData){
  const results = incomingData.results;
  const APIkey = "ourAPIkey";
  //TODO change the API key to the actual one and implement that change in test too;
  console.log(results);

  let outputArray = results.map(function(restaurant) {
    let outputRestaurantObject = {};

    outputRestaurantObject.location = restaurant.geometry.location;
    outputRestaurantObject.name = restaurant.name;
    outputRestaurantObject.photoURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=${APIkey}`

  });



}

module.exports = processReastaurantSearch;
