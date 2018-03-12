import React from 'react';

class RestaurantCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<article className='restaurant-card'>
				<img src='http://via.placeholder.com/150x150' />
				<h3 className='restaurant-name'> Name </h3>
				<p className='restaurant-rating'> 2 </p>
				<p className='number-of-reviews'> 6 </p>
				<p className='start-of-review'> "The experience was so terrible I barely survived"</p>
			</article>	
		)
	}
}

export default RestaurantCard;