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
      submitKeyword: '',
      submitLocationLat: '',
      submitLocationLng: ''
    };

    this.saveInputQueries = this.saveInputQueries.bind(this);
  }

  saveInputQueries(inputKeywordQuery, lat, lng) {
    this.setState({
      submitKeyword: inputKeywordQuery,
      submitLocationLat: lat, 
      submitLocationLng: lng
    });
  }

  render(){
    console.log(this.state);

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
              rating={item.rating}
              photoURL={item.photoURL}
            />;
    });

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
}

export default App;
