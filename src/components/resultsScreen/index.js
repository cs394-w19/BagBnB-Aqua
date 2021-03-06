import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss'
//components
import ResultsShelf from '../resultsShelf'
import SearchInfo from '../searchInfo'

class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: {
                to: '',
                from: '',
                date: new Date().toISOString().slice(0,10),
                flightNumber: ''
            },
            searchUsingFlightNumber: true
        };
        this.onBookClick = this.onBookClick.bind(this);
    }

    onFlightClick = () => {
        const state = this.state;
        state.searchUsingFlightNumber = true;
        this.setState(state);
    };

    onLocationClick = () => {
        const state = this.state;
        state.searchUsingFlightNumber = false;
        this.setState(state);
    };

    onFromChange = (from) => {
        const state = this.state;
        state.searchParams.from = from;
        this.setState(state);
    };
    onToChange = (to) => {
        const state = this.state;
        state.searchParams.to = to;
        this.setState(state);
    };
    onDateChange = (date) => {
        const state = this.state;
        state.searchParams.date = date;
        this.setState(state);
    };
    onFlightNumberChange = (flightNumber) => {
        const state = this.state;
        state.searchParams.flightNumber = flightNumber;
        this.setState(state);
    };

    onBookClick = (listingId) => {
        this.props.history.push({
            pathname: "/confirmation",
            search: "?id=" + listingId
        });
    }

    render() {
        return (
            <div className='results-screen'>
                <SearchInfo
                    searchParams={this.state.searchParams}
                    onFromChange={this.onFromChange}
                    onToChange={this.onToChange}
                    onDateChange={this.onDateChange}
                    onFlightNumberChange={this.onFlightNumberChange}
                    onFlightClick={this.onFlightClick}
                    onLocationClick={this.onLocationClick}
                    searchUsingFlightNumber={this.state.searchUsingFlightNumber}
                />
                <ResultsShelf
                    listings={this.props.listings}
                    searchParams={this.state.searchParams}
                    onBookClick={this.onBookClick}
                    searchUsingFlightNumber={this.state.searchUsingFlightNumber}
                    flights={this.props.flights}
                />
            </div>
        )
    }
}

export default withRouter(ResultsScreen);