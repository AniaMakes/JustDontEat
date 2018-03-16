import React from 'react';

class RestaurantCard extends React.Component {
	constructor(props) {
		super(props);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(event) {
		event.preventDefault();
		this.props.restaurantIdReceiver([this.props.restaurantId, this.props.photoURL]);
	}

	render() {

		//placeid as key, as this needed for detailed search
		const { photoURL, restaurantName, rating } = this.props;
		// image, restaurant name, rating, address, onClick handle on a button

		//default image if no incoming photo

		let thumbsDown;

		if (rating >= 2.8){
			thumbsDown = "👎";
		}
		else if (rating < 2.8 && rating >= 2.1){
			thumbsDown = "👎👎";
		}
		else if(rating < 2.1){
			thumbsDown = "👎👎👎";
		}

		return (

			<article className='restaurant-card'>
				<div className='card-header'>
					<div className='image-container' >
						<img className='restaurant-image'
							src={photoURL}
						/>
					</div>
					<div className='card-info'>
					<h3 className='restaurant-name'>
						{restaurantName}
					</h3>
					<p className='restaurant-rating'> Rating: <b className='rating-number'>{rating} {thumbsDown}</b></p>
					</div>
				</div>
				<button className='btn-more' onClick={this.clickHandler}> Read more </button>
			</article>
		);
	}
}

export default RestaurantCard;
