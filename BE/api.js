const {googlePlacesApiKey ,googlePlacesApiURL} = process.env

//upate functions to get parameters from queries and send json back also catch errors

function getPlaces(req,res){
    // const keyword,lat,long, radius=1000
const url= `${googlePlacesApiURL}/nearbysearch/json?location=${lat},${long}&radius=${radius}&type=restaurant&keyword=${keyword}&key=${googlePlacesApiKey}`;
console.log(url); 
return fetch(url)
}


function getPlaceDetails(req,res){
    const placeId = req.query.placeId
    const url= `${googlePlacesApiURL}/details/json?placeid=${placeId}&key=${googlePlacesApiKey}`;
    fetch(url).then((response)=>{
        return response.json()
    }).then(data=>{
        console.log(data)
    })
}

function getNextPage(nextPageToken){
    const url= `${googlePlacesApiURL}/nearbysearch/json?pagetoken=${nextPageToken}&key=${googlePlacesApiKey}`;
}

function getPhoto(id){

}

function getGeolocation(searchTerm){
    
}



module.exports = {getPlaces,getPlaceDetails};