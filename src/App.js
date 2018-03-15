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
    };

    this.saveInputQueries = this.saveInputQueries.bind(this);
    this.fetchDetails = this.fetchDetails.bind(this);
    this.fetchRestaurants = this.fetchRestaurants.bind(this);

  }

  saveInputQueries(inputKeywordQuery, lat, lng) {
    this.setState({
      submitKeyword: inputKeywordQuery,
      submitLocationLat: lat,
      submitLocationLng: lng
    }, this.fetchRestaurants);
  }

  fetchDetails(details) {
    console.log("fetch details");
    console.log(details);
    const processRestaurantDetails = require("../BE/lib/processRestaurantDetails");
    const detailsDummyData = require("../tests/dummyData/restaurantDetails");
    const detailsData = processRestaurantDetails(detailsDummyData.default);

    const {name, rating, address, reviews, photoURL} = this.props;

    const outputRestaurantDetailsObject = {
      name,
      rating,
      address,
      reviews,
      photoURL
    };

    this.setState({
      view : "details",
      restaurantDetails : outputRestaurantDetailsObject
    });
  }

  fetchRestaurants() {
    let keyword;

    if (this.state.submitKeyword === "") {
      keyword = "";
    } else {
      keyword = "&keyword=";
    }
    let fetchUrl = `http://localhost:3000/api/get-places?lat=${this.state.submitLocationLat}&long=${this.state.submitLocationLng}${keyword}${this.state.submitKeyword}`;
    fetch(fetchUrl).then((response) => {
      return response.json();
    }).then(data => {
      this.setState({data: data.results, restaurantsShown: true});
    });
  }

  render() {
    const createRestaurantCards = () => {
      return this.state.restaurantsShown
        ? this.state.data.map(function(item) {
          return <RestaurantCard restaurantName={item.name} key={item.place_id} rating={item.rating} photoURL={item.photoURL}
          restaurantIdReceiver={this.fetchDetails}/>;
        }, this)
        : null;
    };

    let renderedContent;

    if(this.state.view == "basic"){
      renderedContent =
        <div>
          <Search receiver={this.saveInputQueries}/>
          <section className='restaurants'>
            <h2 className='restaurants-list-header'>
              Top worst restaurants in your area</h2>
            <ul className='restaurants-list'>

              {createRestaurantCards()}

            </ul>
          </section>
        </div>;
    } else {
      renderedContent =
        <RestaurantDetails name={this.details.restaurantDetails.name} rating={this.details.restaurantDetails.rating} address={this.details.restaurantDetails.address} reviews={this.details.restaurantDetails.reviews} photoURL={details[1]}/>;
    }

    return (
      renderedContent
    );

    // return (<div>
    //   <Search receiver={this.saveInputQueries}/>
    //   <section className='restaurants'>
    //     <h2 className='restaurants-list-header'>
    //       Top worst restaurants in your area</h2>
    //     <ul className='restaurants-list'>
    //
    //       {createRestaurantCards()}
    //
    //     </ul>
    //   </section>
    // </div>);



        // let detailsJSX = <RestaurantDetails name={detailsData.name} rating={detailsData.rating} address={detailsData.address} reviews={detailsData.reviews} photoURL={details[1]}/>;

  // } else {
  //   return ({this.state.restaurantDetailJSX});
  // }
  }
}

export default App;
