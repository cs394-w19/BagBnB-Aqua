import React, {Component} from 'react';
import "./style.scss";

const classname = require('classnames');

class SellInfo extends Component {
    constructor(props) {
        super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFlightNumberChange = this.handleFlightNumberChange.bind(this);
    }

    handleFromChange(e) {
        this.props.onFromChange(e.target.value)
    }

    handleToChange(e) {
        this.props.onToChange(e.target.value)
    }

    handleDateChange(e) {
        this.props.onDateChange(e.target.value)
    }

    handleFlightNumberChange(e) {
        this.props.onFlightNumberChange(e.target.value)
    }

    render() {
        const { searchUsingFlightNumber, searchParams, onFlightClick, onLocationClick }= this.props;
        const flightNumberClassName = classname(
            "search-flight-tab-button",
            {"search-flight-tab-button-active": searchUsingFlightNumber})
        const locationClassName = classname(
            "search-flight-tab-button",
            {"search-flight-tab-button-active": !searchUsingFlightNumber})
        return (
            <div className="search">
                <form className="search-input">
                    <input placeholder="Departure (i.e., ORD)" 
                        type="text" value={searchParams.from} onChange={this.handleFromChange}/>
                    <input placeholder="Arrival (i.e., LGA)"
                        type="text" value={searchParams.to} onChange={this.handleToChange}/>
                    <input placeholder="Flight Number (i.e VA314)"
                        type="text"
                        value={searchParams.flightNumber}
                        onChange={this.handleFlightNumberChange}/>
                    <input
                        type="date"
                        value={searchParams.date} onChange={this.handleDateChange}/>
                </form>
            </div>
        )
    }
}

export default SellInfo;