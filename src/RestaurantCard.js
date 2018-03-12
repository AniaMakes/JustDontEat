import React from 'react';

class RestaurantCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<article className='restaurant-card'>
				<img className='restaurant-image'
					src='http://via.placeholder.com/150x150'
				/>
				<div className = 'card-info'>
					<h3 className='restaurant-name'> Restaurant Name </h3>
					<div className='card-info-details'>
						<div className ='rating-and-reviews'>
							<p className='restaurant-rating'> Rating: 2</p>
							<p className='number-of-reviews'> 6 reviews </p>
						</div>
						<p className='start-of-review'> "The experience was so terrible I barely survived" </p>
					</div>
				</div>
				<button> Read more </button>
			</article>	
		)
	}
}

export default RestaurantCard;