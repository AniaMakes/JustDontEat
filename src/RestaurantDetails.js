import React from 'react';

class RestaurantDetails extends React.Component {
	constructor(props){
		super(props);
	};

	render() {
		const {name,rating,address,reviews,photoURL} = this.props;

		let reviewsArray = reviews.map(function(review,i){
			let date = new Date(review.time*1000);
			return (<article className='review-article'key={i}>
						<div className='review-header'>
				      		<p className='review-author'>Author: <b className='review-author-bold'>{review.author_name}</b></p>
							<p className='review-rating'>Rated: <b className='review-rating-bold'>{review.rating}</b></p>
						</div>
						<p className='review-text'>"{review.text}"</p>
						<p className='review-date'>Date: {
							`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
						}
						</p>
					 </article>);
		});

		return (
			<div className='restaurant-details'>
				<div className='info-wrapper'>
					<div>
						<img className='restaurant-details-image'
							src={photoURL}/>
					</div>
					<div className='details-wrapper'>
						<h3 className='restaurant-details-name'>{name}</h3>	
						<p className='restaurant-details-rating'>Rating: <b className='details-rating'>{rating}</b></p>
						<p className='restaurant-details-address'>Address: {address}</p>
					</div>
				</div>
				<h4 className='reviews-block-header'>Reviews: </h4>
				<div className='reviews-block'>
					{reviewsArray}
			  	</div>
			  	<button className='btn-back' onClick={this.props.closeDetail}>X</button>
			  </div>

		);
	}
}

export default RestaurantDetails;
