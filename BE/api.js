
const {googlePlacesApiKey} = process.env
const googlePlacesApiURL='https://maps.googleapis.com/maps/api/place'
const processRestaurantSearch = require('./lib/processRestaurantSearch');
const processRestaurantDetails = require('./lib/processRestaurantDetails');
const fetch = require('node-fetch');

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
    console.log(url)
    fetch(url).then((response) => {
        return response.json()
    }).then(data => {
        fillArr=data.results
        console.log(data);
        if(data.next_page_token && fillArr.length<minLength) {
            getNextPage(data.next_page_token,fillArr,minLength,res) 
        }else{
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
        data = processRestaurantDetails(data)
        res.status(200).json(data)
    }).catch(err => {
        console.log(err)
    })
}

function getGeolocation(req, res){
	//*************************************************//
	// Using geocoder to get a coordinates via Promise //
    //*************************************************//
    
    
	fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.placeName}&key=${googlePlacesApiKey}`)
	  .then(response => response.json())
	  .then(response => {
	    res.status(200).json(response.results[0].geometry.location);
	  }).catch(function(err) {
	    console.log(err);
	 	});
}



module.exports = {getPlaces, getPlaceDetails, getGeolocation};
