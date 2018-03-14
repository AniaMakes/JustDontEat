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

  componentDidMount(){
    fetch('http://localhost:3000/api/get-places?keyword=chinese&lat=-33.8670522&long=151.1957362')
      .then((response)=>{
        console.log(response);
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
      return this.state.restaurantsShown ? this.state.data.map(function(item) {
        return <RestaurantCard
                restaurantName={item.name}
                key={item.place_id}
                rating={item.rating}
                photoURL={item.photoURL}
              />;
      }): 
      null;
    };
   

    return (
      <div>
        <Search receiver={this.saveInputQueries} />
        <section className='restaurants'>
          <h2 className='restaurants-list-header'> Top worst restaurants in your area</h2>
          <ul className='restaurants-list'>

            {createRestaurantCards()}

          </ul>
        </section>
      </div>
    );
  }
}

export default App;
