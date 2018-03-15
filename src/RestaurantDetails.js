import React from 'react';

class RestaurantDetails extends React.Component {
	constructor(props){
		super(props);
	};

	render() {
		const {name,rating,address,reviews,photoURL} = this.props;

		let reviewsArray = reviews.map(function(review,i){
			let date = new Date(review.time*1000);
			return (<article key={i}>
				      	<p>Author:{review.author_name}</p>
						<p>Rating:{review.rating}</p>
						<p>Review:{review.text}</p>
						<p>Date:{
							`${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
						}
						</p>
					 </article>);
		});

		return (
			<div className='restaurant-details'>
				<div>
					<img className='restaurant-details-image'
						src={photoURL}/>
				</div>
				<h3 className='restaurant-details-name'>{name}</h3>
				<p className='restaurant-details-rating'>Rating:{rating}</p>
				<p className='restaurant-details-address'>Address:{address}</p>
				<div className='restaurant-details-reviews'>Reviews:{reviewsArray}
			  </div>
			  	<button onClick={this.props.closeDetail}>X</button>
			  </div>

		);
	}
}

export default RestaurantDetails;
