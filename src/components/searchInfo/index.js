import React, {Component} from 'react';
import "./style.scss";

class SearchInfo extends Component {
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
        const searchParams = this.props.searchParams;
        return (
            <div>
                <form className="flight-search">
                    <input placeholder="Departure (i.e., ORD)" className="flight-search-input" type="text"
                           value={searchParams.from} onChange={this.handleFromChange}/>
                    <input placeholder="Arrival (i.e., LGA)" className="flight-search-input" type="text"
                           value={searchParams.to} onChange={this.handleToChange}/>
                    <input className="flight-search-input" type="datetime-local" value={searchParams.date}
                           onChange={this.handleDateChange}/>
                </form>
                <form className="flight-search">
                    <input placeholder="Flight Number (i.e 2347758488)" className="flight-search-input" type="text"
                           value={searchParams.flightNumber} onChange={this.handleFlightNumberChange}/>
                </form>
            </div>
        )
    }
}

export default SearchInfo;