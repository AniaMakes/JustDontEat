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
    this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }

  saveInputQueries(inputKeywordQuery, lat, lng) {
    this.setState({
      submitKeyword: inputKeywordQuery,
      submitLocationLat: lat, 
      submitLocationLng: lng
    }, 
    this.fetchRestaurants
    );
  }

  fetchRestaurants(){
    let keyword;

    if(this.state.submitKeyword === ""){
      keyword = "";
    } else {
      keyword = "&keyword=";
    }
    let fetchUrl = `http://localhost:3000/api/get-places?lat=${this.state.submitLocationLat}&long=${this.state.submitLocationLng}${keyword}${this.state.submitKeyword}`;
    fetch(fetchUrl)
      .then((response)=>{
        return response.json();
      }).then(data=>{
        console.log(data);
        this.setState({
          data:data.results,
          restaurantsShown:true
        });
      });
  }

  render(){
    const createRestaurantCards=()=>{
      return this.state.data ? this.state.data.map(function(item) {
        return <RestaurantCard
                restaurantName={item.name}
                key={item.place_id}
                rating={item.rating}
                photoURL={item.photoURL}
              />;
      }): 
      <h4>You are lucky!There is no bad restaurants in your area, </h4>;
    };

    const restaurants= this.state.restaurantsShown? createRestaurantCards() : null;
   

    return (
      
      <div>
        <Search receiver={this.saveInputQueries} />
        <section className='restaurants'>
          <h2 className='restaurants-list-header'> Top worst restaurants in your area</h2>
          <ul className='restaurants-list'>

            {restaurants}

          </ul>
        </section>
      </div>
    );
  }
}

export default App;
