import React from 'react';

class RestaurantCard extends React.Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event){
		event.preventDefault();
		this.props.onClick(this.props.restaurant.placeid);
	}

	render() {

		//placeid as key, as this needed for detailed search
		const {imageURL, restaurantName, rating, address} = this.props;
		// image, restaurant name, rating, address, onClick handle on a button

		//default image if no incoming photo

		return (

			<article className='restaurant-card'>
				<img className='restaurant-image'
					src='http://via.placeholder.com/150x150'
				/>
				<div className = 'card-info'>
					<h3 className='restaurant-name'>
						{restaurantName}</h3>
					<div className='restaurant-address'>
						{address}
					</div>
					<div className='card-info-details'>
						<div className ='rating-and-reviews'>
							<p className='restaurant-rating'> Rating: {rating}</p>
					</div>
					</div>
					<button onClick={this.clickHandler}> Read more </button>
					</div>
			</article>
		)
	}
}

export default RestaurantCard;
