import React from 'react';
import {getPlaceDetails, getPlaces} from './api.js';

class ExpFetch extends React.Component{
    state={
        location:{lat:-33.8670522,long:151.1957362},
        getPlacesResult:'No Result',
        getPlaceDetailsResult:'No details'
    }
    onSubmitHandlerKeyword=(event)=>{
        console.log(event);
        getPlaces(event.target.keyword.value,this.state.location)
            .then((places)=>{
                this.setState({
                    getPlacesResult: places
                });
            });
    }
    onSubmitHandlerId=(event)=>{
        console.log(event);
        getPlacesDetails(event.target.id)
            .then((places)=>{
                this.setState({
                    getPlacesResult: places
                });
            });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHandlerKeyword}>
                    <label>
                    <input type='text' name='keyword'/>>
                    </label>
                </form>
                <form onSubmit={this.onSubmitHandlerId}>
                    <label>
                    <input type='text' name='id'/>>
                    </label>
                </form>
                <p>GetPlacesResult</p>
                <p>{this.getPlacesResult}</p>
                <p>GetPlacesDetailsResult</p>
                <p>{this.getPlacesDetaulsResult}</p>
            </div>
        );
    }
}

export default ExpFetch;