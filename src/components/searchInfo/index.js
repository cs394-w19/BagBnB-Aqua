import React, {Component} from 'react';
import "./style.scss";

const classname = require('classnames');

class SearchInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUsingFlightNumber: true
        };
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
        const flightNumberClassName = classname(
            "search-flight-tab-button",
            {"search-flight-tab-button-active": this.state.searchUsingFlightNumber})
        const locationClassName = classname(
            "search-flight-tab-button",
            {"search-flight-tab-button-active": !this.state.searchUsingFlightNumber})
        return (
            <div>
                <form className="search">
                    <div className="search-flight">
                        <div className="search-flight-tab">
                            <div className={flightNumberClassName}
                                 onClick={() => this.setState({searchUsingFlightNumber: true})}>Flight No.
                            </div>
                            <div className={locationClassName}
                                 onClick={() => this.setState({searchUsingFlightNumber: false})}>Location
                            </div>
                        </div>
                        {!this.state.searchUsingFlightNumber && <div>
                            <input placeholder="Departure (i.e., ORD)"
                                   className="search-flight-input flight-search-input"
                                   type="text" value={searchParams.from} onChange={this.handleFromChange}/>
                            <input placeholder="Arrival (i.e., LGA)"
                                   className="search-flight-input flight-search-input"
                                   type="text" value={searchParams.to} onChange={this.handleToChange}/>
                        </div>
                        }
                        {this.state.searchUsingFlightNumber && <input placeholder="Flight Number (i.e VA314)"
                                                                      className="search-flight-input"
                                                                      type="text"
                                                                      value={searchParams.flightNumber}
                                                                      onChange={this.handleFlightNumberChange}/>}
                    </div>
                    <div className="search-date">
                        <div>Date:</div>
                        <input className="search-date-input" type="date"
                               value={searchParams.date} onChange={this.handleDateChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInfo;