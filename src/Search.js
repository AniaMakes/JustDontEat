import React from 'react';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const searchQuery = this.state.value;
		this.props.receiver(searchQuery);
	} 

	render() {
		return (
			<div className='header'>
				<h1 className="logo">JustDontEat</h1>
				<form 
					className='search-form'
					onSubmit={this.handleSubmit}
				>
					<input 
						type="text" 
						placeholder='Search'
						onChange={this.handleChange}
						value={this.state.value}
						id='search-input'
						className='search-input'
						name='search-input'
					/>
					<button className='submit-btn' type='submit'>►</button>
					<a href="#"><img src="./assets/images/placeholder.png" alt=""/></a>
				</form>
			</div>
		)
	}
}


export default Search;