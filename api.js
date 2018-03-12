const {googlePlacesApiURL, googlePlacesApiKey} = process.env
console.log(googlePlacesApiKey,googlePlacesApiURL);

function getPlaces(location,keyword,radius=500){
const url= `${googlePlacesApiURL}/nearbysearch/json?location=${location.lat},${location.long}&radius=${radius}&type=restaurant&keyword=${keyword}&key=${googlePlacesApiKey}`
console.log(url)
}
const location= {lat:-33.8670522,long:151.1957362}

getPlaces(location,'chinese');

function getPlaceDetails(placeId){
    const url= `${googlePlacesApiURL}/details/json?placeid=${placeId}&key=${googlePlacesApiKey}`
    console.log(url)
}

getPlaceDetails('ChIJsfCA-DmuEmsRM1QTsmdL1Uo')


module.exports = {getPlaces,getPlaceDetails}