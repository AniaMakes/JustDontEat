const {googlePlacesApiKey ,googlePlacesApiURL} = process.env

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

function getPhoto(id){

}

function getGeolocation(searchTerm){
    
}



module.exports = {getPlaces,getPlaceDetails};