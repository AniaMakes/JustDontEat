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
    // console.log(this.state);
    return (
      <div>
        <Search receiver={this.saveInputQueries} />
        <section className='restaurants'>
          <h2> Results </h2>
          <ul className='restaurants-list'>
            Top worst restaurants in your area
            <RestaurantCard />
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
