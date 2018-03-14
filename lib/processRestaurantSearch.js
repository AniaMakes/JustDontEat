function processReastaurantSearch(incomingData, APIkey){
  const results = incomingData.results;

  let outputArray = results.map(function(restaurant) {
    let outputRestaurantObject = {};

    if (restaurant.hasOwnProperty("photos")){
      let photoRef = restaurant.photos[0].photo_reference;
      outputRestaurantObject.photoURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&sensor=false&maxheight=MAX_HEIGHT&maxwidth=MAX_WIDTH&key=${APIkey}`;
    } else {
      outputRestaurantObject.photoURL = "placeholder image";
    }

    //TODO add actual placeholder image path

    outputRestaurantObject.location = restaurant.geometry.location;
    outputRestaurantObject.name = restaurant.name;

    outputRestaurantObject.place_id=restaurant.place_id;
    outputRestaurantObject.rating = restaurant.rating;

    return outputRestaurantObject;
  });

  return outputArray;

}

module.exports = processReastaurantSearch;
