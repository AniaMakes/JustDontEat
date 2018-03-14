const {googlePlacesApiKey, googleMapsApiKey, googlePlacesApiURL} = process.env
const fetch = require('node-fetch');

// const NodeGeocoder = require('node-geocoder');
// const options = {
//   provider: 'google',
 
//   // Optional depending on the providers
//   httpAdapter: 'https', // Default
//   apiKey: googleMapsApiKey, // for Mapquest, OpenCage, Google Premier
//   formatter: null         // 'gpx', 'string', ...
// };
// const geocoder = NodeGeocoder(options);

//upate functions to get parameters from queries and send json back also catch errors

function getPlaces(keyword,lat,long, radius=1000){

const url= `${googlePlacesApiURL}/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&keyword=${keyword}&key=${googlePlacesApiKey}`;
console.log(url); 
return fetch(url)
}


function getPlaceDetails(placeId){
    const url= `${googlePlacesApiURL}/details/json?placeid=${placeId}&key=${googlePlacesApiKey}`;
    return fetch(url)
}

function getNextPage(nextPageToken){
    const url= `${googlePlacesApiURL}/nearbysearch/json?pagetoken=${nextPageToken}&key=${googlePlacesApiKey}`;
}

function getPhoto(req, res, id){

}

function getGeolocation(req, res){
// console.log(req.params.placeName)
// console.log(googlePlacesApiKey)
	//*************************************************//
	// Using geocoder to get a coordinates via Promise //
	//*************************************************//
	fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.placeName}&sensor=false&key=${googlePlacesApiKey}`)
	  .then(response => response.json())
	  .then(response => {
	    // console.log(response[0].latitude, response[0].longitude);
	    res.status(200).json(response.results[0].geometry.location);
	  }).catch(function(err) {
	    console.log(err);
	 	});
}



module.exports = {getPlaces, getPlaceDetails, getPhoto, getGeolocation};