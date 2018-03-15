import React from 'react';

class RestaurantDetails extends React.Component {
	constructor(props){
		super(props);
	};

	// closeDetail

	render() {
		const {name,rating,address,reviews,photoURL} = this.props;
		let reviewsArray = reviews.map(function(review){
			return (<article>
				      	<p>Author:{review.author_name}</p>
								<p>Rating:{review.rating}</p>
								<p>Review:{review.text}</p>
								<p>Date:{new Date(review.time)}</p>
						 </article>);
		});

		return (
			<div className='restaurant-details'>
				<div className='restaurant-details-image'>
					<img src={photoURL}/>
				</div>
				<div className='restaurant-details-name'>Restaurant name:{name}</div>
				<div className='restaurant-details-rating'>Restaurant rating:{rating}</div>
				<div className='restaurant-details-address'>Restaurant address:{address}</div>
				<div className='restaurant-details-reviews'>Reviews:{reviewsArray}>
			  </div>
			  <button onClick={closeDetail}>X</button>
{/*//removes the details page - state change occurs in app
*/}			</div>
		);
	}
}

export default RestaurantDetails;
