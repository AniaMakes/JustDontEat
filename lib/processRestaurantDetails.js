function processRestaurantDetails(incomingData){
  const details = incomingData.result;

  let outputRestaurantDetailsObject = {};

  outputRestaurantDetailsObject.name = details.name;
  outputRestaurantDetailsObject.address = details.formatted_address;
  outputRestaurantDetailsObject.rating = details.rating;
  outputRestaurantDetailsObject.contactDetails = details.international_phone_number;
  outputRestaurantDetailsObject.reviews = details.reviews;

  return outputRestaurantDetailsObject;
}

module.exports = processRestaurantDetails;
