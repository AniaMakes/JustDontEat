import React from 'react';
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBlPkgEc3taqeXdU0X8BuJsx8VElganCKI");

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputKeyword: '',
			inputLocation: '',
			validLocation: 'blank'
		};

		this.handleKeywordChange = this.handleKeywordChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleKeywordChange(event) {
		this.setState({
			inputKeyword: event.target.value
		});
	}

	handleLocationChange(event) {
		this.setState({
			inputLocation: event.target.value,
			validLocation:true
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.inputLocation !== '') {
			this.setState({
				validLocation: true
			});
			const inputKeywordQuery = this.state.inputKeyword;
			Geocode.fromAddress(this.state.inputLocation)
				.then(response => {
				    const { lat, lng } = response.results[0].geometry.location;
				    this.props.receiver(inputKeywordQuery, lat, lng);
				  },
				  error => {
				    console.error(error);
				  });	
		} else {
			this.setState({
				validLocation: false
			});
		}
		
	}
	render() {
		return (
			<div className='header'>

				<h1 className="logo">Just<br/>Dont<br/>Eat</h1>
				<form 
					className='search-form'
					onSubmit={this.handleSubmit}
				>

{/*=========================================*/}
					{/*Keyword search input*/}
{/*=========================================*/}
					<div className='form-flex'>
						<div className='input-flex'>
							<input 
								type="text" 
								placeholder='Search any food'
								onChange={this.handleKeywordChange}
								value={this.state.inputKeyword}
								id='search-input'
								className='search-input'
								name='search-input'
							/>

		{/*=========================================*/}
							{/*Location search input*/}
		{/*=========================================*/}
							<input 
								type="text" 
								placeholder='Type Location'
								onChange={this.handleLocationChange}
								value={this.state.inputLocation}
								id='search-input'
								className='search-input'
								name='search-input'
							/>

		{/*=========================================*/}
			{/*Hidden error message for validation*/}
		{/*=========================================*/}
							</div>
						<button className='submit-btn' type='submit'>►</button>
					</div>
					<p className={this.state.validLocation !== false ? 'hidden' : 'validation-error'}>
						Location field can't be empty
					</p>
				</form>
			</div>
		);
	}
}


export default Search;