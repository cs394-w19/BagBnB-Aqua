import React, { Component } from 'react';
import './style.scss';

import ShelfItem from '../shelfItem';

import flights from '../../data/flights.json';

class ResultsShelf extends Component {

    matchStrings(searchStr, listingStr) {
        return (listingStr.includes(searchStr.toUpperCase()) || searchStr === "")
    }

    render() {
        const { listings, searchParams, onBookClick } = this.props;
        if (flights.flights.find((f)=>f.flightNumber===searchParams.flightNumber)){
            const flight = flights.flights.find((f)=>f.flightNumber===searchParams.flightNumber);
            searchParams.from = flight.departureLoc;
            searchParams.to = flight.arrivalLoc;
        }

        const filteredListings = listings.filter((l) =>
            (!l.booked &&
                this.matchStrings(searchParams.from, l.flightInfo.departureLoc) &&
                this.matchStrings(searchParams.to, l.flightInfo.arrivalLoc)));
        const items = filteredListings.map((l) => <ShelfItem listing={l} onBookClick={onBookClick}/>);
        return (
            <div className="result-shelf">
            	<h1>Search Results:</h1>
                {items}
            </div>
        )
    }
}

export default ResultsShelf;