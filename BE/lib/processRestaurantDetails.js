function processRestaurantDetails(details){

  let outputRestaurantDetailsObject = {};

  outputRestaurantDetailsObject.name = details.name;
  outputRestaurantDetailsObject.address = details.formatted_address;
  outputRestaurantDetailsObject.rating = details.rating;
  outputRestaurantDetailsObject.contactDetails = details.international_phone_number;
  outputRestaurantDetailsObject.reviews = details.reviews.sort((a,b)=> a.rating-b.rating);

  return outputRestaurantDetailsObject;
}

module.exports = processRestaurantDetails;
