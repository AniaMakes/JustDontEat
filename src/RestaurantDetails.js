import React from 'react';

class RestaurantDetails extends React.Component {
	constructor(props){
		super(props);

		this.closeDetail = this.closeDetail.bind(this);
	};

	closeDetail(event){
		console.log(event);
	}

	render() {
		const {name,rating,address,reviews,photoURL} = this.props;
		let reviewsArray = reviews.map(function(review){
			// console.log(review.time);
			let date = new Date(review.time*1000);
			// console.log('date', date);
			return (<article>
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
			  <button onClick={this.closeDetail}>X</button>
			</div>
		);
	}
}

export default RestaurantDetails;
