
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


const { googlePlacesApiKey, googlePlacesApiURL } = process.env
const processRestaurantSearch = require('./lib/processRestaurantSearch');
const processRestaurantDetails = require('./lib/processRestaurantDetails');
const fetch = require('node-fetch');

//upate functions to get parameters from queries and send json back also catch errors


// try url http://localhost:3000/api/get-places?keyword=chinese&lat=-33.8670522&long=151.1957362
function getPlaces(req, res) {
    // getting queries from request
    const keyword = req.query.keyword;
    const lat = req.query.lat;
    const long = req.query.long;
    // assigning default search radius if not specified
    const radius = req.query.radius || 10000;
    //creating an empty array to fill
    fillArr=[]
    //defining how many results we would like to fetch minimum
    minLength=10;
    
    //compiling fetch url
    const url = `${googlePlacesApiURL}/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&keyword=${keyword}&key=${googlePlacesApiKey}`;
    fetch(url).then((response) => {
        return response.json()
    }).then(data => {
        fillArr=data.results
        if(data.next_page_token && fillArr.length<minLength) {
            getNextPage(data.next_page_token,fillArr,minLength,res) 
        }else{
            //Ania's sorting and striping function should go here before send.
            fillArr= processRestaurantSearch(fillArr,googlePlacesApiKey).sort((a,b)=> a.rating-b.rating);
            res.status(200).json({results:fillArr});
        } 
    }).catch(err => { 
        console.log(err)  
    })
}

function getNextPage(nextPageToken,fillArr,minLength,res) {
    const url = `${googlePlacesApiURL}/nearbysearch/json?pagetoken=${nextPageToken}&key=${googlePlacesApiKey}`;
    setTimeout(()=>{
        fetch(url).then((response) => {
            return response.json()
        }).then(data=>{
            fillArr=fillArr.concat(data.results);
            if(data.next_page_token && fillArr.length<minLength) {
                getNextPage(data.next_page_token,fillArr,minLength,res)
            }else{
                //Ania's sorting and striping function should go here before send.
                fillArr= processRestaurantSearch(fillArr,googlePlacesApiKey).sort((a,b)=> a.rating-b.rating);
                res.status(200).json({results:fillArr});
            } 
        }).catch(err=> console.log(err))
    },2000)
   
}

function getPlaceDetails(req, res) {
    const placeId = req.query.placeId
    const url = `${googlePlacesApiURL}/details/json?placeid=${placeId}&key=${googlePlacesApiKey}`;
    fetch(url).then((response) => {
        return response.json()
    }).then(data => {
        //details stripping function should go here
        res.status(200).json(data)
    }).catch(err => {
        console.log(err)
    })
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



module.exports = {getPlaces, getPlaceDetails, getGeolocation};
