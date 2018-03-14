import React from 'react';

class RestaurantDetails extends React.Component {
	constructor(props){
		super(props);
	};
	render() {
		const {restaurant,onClick} = this.props;
		return (
			<div className='restaurant-details'>
				<div className='restaurant-details-image'>
					<img src={restaurant.Image} alt={'Image of food'}/>
				</div>
				<div className='restaurant-details-name'>Restaurant name:{restaurant.Name}</div>
				<div className='restaurant-details-rating'>Restaurant rating:{restaurant.Rating}</div>
				<div className='restaurant-details-reviews'>Reviews:{restaurant.Reviews}>
			  </div>
			  <button onClick={onClick}>X</button>
{/*//removes the details page - state change occurs in app
*/}			</div>
		);
	}
}

export default RestaurantDetails;
