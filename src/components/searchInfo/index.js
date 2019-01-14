import React, { Component } from 'react';
import "./style.scss"

class SearchInfo extends Component {

    handleFromChange(e) {
        this.props.onFromChange(e.target.value)
    }
    handleToChange(e) {
        this.props.onToChange(e.target.value)
    }
    handleDateChange(e) {
        this.props.onDateChange(e.target.value)
    }

    render(){
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        const searchParams = this.props.searchParams;
        return (
            <form className="flight-search">
                <input placeholder="Destination (i.e., ORD)" className= "flight-search-input" type="text" value={searchParams.from} onChange={this.handleFromChange}/>
                <input placeholder="Arrival (i.e., LGA)"className= "flight-search-input"type="text" value={searchParams.to} onChange={this.handleToChange}/>
                <input className= "flight-search-input" type="datetime-local" value={searchParams.date} onChange={this.handleDateChange}/>
            </form>

        )
    }
}
export default SearchInfo;