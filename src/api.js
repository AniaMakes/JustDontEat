const googlePlacesApiKey='AIzaSyARz6YRlPTcprGfjlyEsOaq3CoMc3-FaEg'
,googlePlacesApiURL='https://maps.googleapis.com/maps/api/place';

function getPlaces(keyword,location, radius=1000){
const url= `${googlePlacesApiURL}/nearbysearch/json?location=${location.lat},${location.long}&radius=${radius}&type=restaurant&keyword=${keyword}&key=${googlePlacesApiKey}`;
console.log(url);
}
const location= {lat:-33.8670522,long:151.1957362};

getPlaces('chinese',location);

function getPlaceDetails(placeId){
    const url= `${googlePlacesApiURL}/details/json?placeid=${placeId}&key=${googlePlacesApiKey}`;
    // fetch(url).then((response)=>{
    //     console.log('sss ',response.next_page_token)
    // })
}

function getNextPage(nextPageToken){
    const url= `${googlePlacesApiURL}/nearbysearch/json?pagetoken=${nextPageToken}&key=${googlePlacesApiKey}`;

}
getPlaceDetails('ChIJsfCA-DmuEmsRM1QTsmdL1Uo');


module.exports = {getPlaces,getPlaceDetails};