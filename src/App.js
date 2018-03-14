import React from 'react';

import Search from './Search';
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from './RestaurantDetails';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      restaurantsShown: false,
      data: [],
      view: 'basic',
      submitKeyword: '',
      submitLocationLat: '',
      submitLocationLng: '',
    };

    this.saveInputQueries = this.saveInputQueries.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
  }

  saveInputQueries(inputKeywordQuery, lat, lng) {
    this.setState({
      submitKeyword: inputKeywordQuery,
      submitLocationLat: lat,
      submitLocationLng: lng
    });
  }

  fetchDetails(details){
    console.log("fetch details");
    console.log(details);
    const processRestaurantDetails = require("../lib/processRestaurantDetails");
    const detailsDummyData = require("../tests/dummyData/restaurantDetails");
    const detailsData = processRestaurantDetails(detailsDummyData.default);


    const {name,rating,address,reviews,photoURL} = this.props;

    this.setState(view : "details");


    let detailsJSX = <RestaurantDetails
      name={detailsData.name}
      rating={detailsData.rating}
      address={detailsData.address}
      reviews={detailsData.reviews}
      photoURL={details[1]}
    />


    this.setState(view : "details");


  }

  render(){
    if (this.state.view === 'basic'){

    // test
    const processRestaurantSearch = require("../lib/processRestaurantSearch");
    const searchDummyData = require("../tests/dummyData/restaurantSearch.js");

    console.log(searchDummyData);
    const workingData = processRestaurantSearch(searchDummyData.default,"AIzaSyBlPkgEc3taqeXdU0X8BuJsx8VElganCKI");

    console.log(workingData);

    //create a card for each object in array
    let restaurantsArray = workingData.map(function(item) {
      return <RestaurantCard
              restaurantName={item.name}
              key={item.place_id}
              restaurantIdReceiver={this.fetchDetails}
              restaurantId = {item.place_id}
              rating={item.rating}
              photoURL={item.photoURL}
            />;
    }, this);

    return (
      <div>
        <Search receiver={this.saveInputQueries} />
        <section className='restaurants'>
          <h2 className='restaurants-list-header'> Top worst restaurants in your area</h2>
          <ul className='restaurants-list'>

            {restaurantsArray}

          </ul>
        </section>
      </div>
    );
  }
 else {
   return (
     {this.state.restaurantDetailJSX}
   );
 }
}
}

export default App;
