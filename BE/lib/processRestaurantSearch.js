function processRestaurantSearch(results, APIkey){
  let outputArray = results.reduce(function(acc,restaurant) {
    let outputRestaurantObject = {};
    if(+(restaurant.rating)<3.5){
    

    if (restaurant.hasOwnProperty("photos")){
      let photoRef = restaurant.photos[0].photo_reference;
      //outputRestaurantObject.photoURL = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoRef}&maxheight=400&key=${APIkey}`;
      outputRestaurantObject.photoURL = `https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?w=800&h=600&dpr=3&auto=compress&cs=tinysrgb`;
    } else {
      outputRestaurantObject.photoURL = "placeholder-image.jpg";
    }

    //TODO add actual placeholder image path

    outputRestaurantObject.location = restaurant.geometry.location;
    outputRestaurantObject.name = restaurant.name;

    outputRestaurantObject.place_id=restaurant.place_id;
    outputRestaurantObject.rating = restaurant.rating;

    acc.push(outputRestaurantObject)
  }
    return acc;
  },[]);

  return outputArray;

}

module.exports = processRestaurantSearch;
