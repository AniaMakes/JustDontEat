import React from 'react';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputKeyword: '',
			inputLocation: ''
		};
	}


	render() {
		return (
			<div className='header'>
				<h1 className="logo">JustDontEat</h1>
				<form 
					className='search-form'
				>
					<input 
						type="text" 
						placeholder='Search'
						id='search-input'
						className='search-input'
						name='search-input'
					/>
					<button className='submit-btn' type='submit'>►</button>
				</form>
			</div>
		);
	}
}


export default Search;