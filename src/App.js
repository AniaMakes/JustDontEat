import React from 'react';

import Search from './Search';
import RestaurantCard from './RestaurantCard';
import RestaurantDetails from './RestaurantDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurantsShown: false,
      data: [],
      view: 'basic',
      submitKeyword: '',
      submitLocationLat: '',
      submitLocationLng: '',
      restaurantDetails: "",
      isResultsFound: false,
      error: ''
    };

    this.saveInputQueries = this.saveInputQueries.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
    this.closeDetailHandler = this.closeDetailHandler.bind(this);

  }

  saveInputQueries(inputKeywordQuery, lat, lng, isResultsFound) {
    this.setState({
      submitKeyword: inputKeywordQuery,
      submitLocationLat: lat,
      submitLocationLng: lng,
      isResultsFound: isResultsFound
    }, this.fetchRestaurants);
  }

  fetchDetails(details) {
    fetch(`http://localhost:3000/api/get-place-details?placeId=${details[0]}`)
      .then(response => response.json())
      .then(data => {
        let outputRestaurantDetailsObject = data;
        outputRestaurantDetailsObject.photoURL = details[1];
        this.setState({
          view: "details",
          restaurantDetails: outputRestaurantDetailsObject
        });
      });
  }

  fetchRestaurants() {
    
    if(this.state.isResultsFound === false) {
      this.setState({
        data: [],
        error: 'Sorry, couldn\'t find anything. Try another location'
      });
    } else {
      let keyword;

      if (this.state.submitKeyword === "") {
        keyword = "";
      } else {
        keyword = "&keyword=";
      }

      let fetchUrl = `http://localhost:3000/api/get-places?lat=${this.state.submitLocationLat}&long=${this.state.submitLocationLng}${keyword}${this.state.submitKeyword}`;
      
      fetch(fetchUrl)
      .then((response)=>{
        return response.json();
      }).then(data=>{
        this.setState({
          data:data.results,
          restaurantsShown:true,
          error: ''
        });
      });
    }

  }

  closeDetailHandler() {
    this.setState({
      view: 'basic',
      restaurantDetails: ''
    });
  }

  render() {
    const createRestaurantCards = () => {
      return this.state.data ? this.state.data.map(function (item, index) {
        return <RestaurantCard
          key={index}
          restaurantName={item.name}
          rating={item.rating}
          photoURL={item.photoURL}
          restaurantId={item.place_id}
          restaurantIdReceiver={this.fetchDetails}
        />;
      }, this) :
        <h4>You are lucky!There is no bad restaurants in your area, </h4>;
    };

    const restaurants = this.state.restaurantsShown ? createRestaurantCards() : null;

    const error = this.state.error ? <h4>{this.state.error}</h4> : null;

    let renderedContent;

    if (this.state.view == "basic") {
      renderedContent =
        <div>
          <Search receiver={this.saveInputQueries} />
          <section className='restaurants'>
            <h2 className='restaurants-list-header'>
              Top worst restaurants in your area</h2>
              {error}
            <ul className='restaurants-list'>
              {restaurants}
            </ul>
          </section>
        </div>;
    } else {
      renderedContent = <RestaurantDetails 
      name={this.state.restaurantDetails.name} 
      rating={this.state.restaurantDetails.rating} 
      address={this.state.restaurantDetails.address} 
      reviews={this.state.restaurantDetails.reviews} 
      photoURL={this.state.restaurantDetails.photoURL}
      closeDetail={this.closeDetailHandler} 
      />;
    }

    return (
      <div>
        {renderedContent}
      </div>
    );
  }
}

export default App;
