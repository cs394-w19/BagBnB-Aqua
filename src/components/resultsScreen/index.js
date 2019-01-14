import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss'

import ResultsShelf from '../resultsShelf'
import SearchInfo from '../searchInfo'

class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: {
                to: '',
                from: '',
                date: new Date().toISOString(),
            }
        };
        this.onBookClick = this.onBookClick.bind(this);
    }

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

    onBookClick = (listingId, username) => {
        // let listing = this.props.listings.find((l) => l.id === listingId);
        // listing.booked = true;
        // listing.bookedBy = username;
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
                    onDateChange={this.onDateChange}/>
                <ResultsShelf
                    listings={this.props.listings}
                    searchParams={this.state.searchParams}
                    onBookClick={this.onBookClick}/>
            </div>
        )
    }
}

export default withRouter(ResultsScreen);