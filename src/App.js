import React from 'react';
import Search from './Search';
// import RestaurantCard from './RestaurantCard';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <Search />
        <section className='restaurants'>
          <h2> Results </h2>
          <ul className='restaurants-list'>
            Top worst restaurants in your area
            {/*<RestaurantCard />*/}

          </ul>
        </section>
      </div>
    );
  }
}

export default App;
