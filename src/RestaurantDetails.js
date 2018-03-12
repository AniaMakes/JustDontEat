import React from 'react';

class RestaurantDetails extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h3> Restaurant name </h3>
				<div className='restaurant-contacts'>
					<p> Adress </p>
					<p> Phone </p>
				</div>
				<ul> Reviews: 
					<li> bad </li>
					<li> very bad </li>
				</ul>
			</div>
		);
	}
}

export default RestaurantDetails;