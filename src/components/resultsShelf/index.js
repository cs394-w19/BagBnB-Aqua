import React, {Component} from 'react';
import './style.scss';
import ShelfItem from '../shelfItem';


class ResultsShelf extends Component {

    matchStrings(searchStr, listingStr) {
        return (listingStr.includes(searchStr.toUpperCase()) || searchStr === "")
    }

    render() {
        const {listings, flights, searchParams, onBookClick, searchUsingFlightNumber} = this.props;
        let filteredListings = [];
        if (searchUsingFlightNumber) {
            filteredListings = listings.filter((l) =>
                (!l.booked &&
                    this.matchStrings(searchParams.flightNumber, l.flightInfo.flightNumber)));
        } else {
            const filteredFlights = flights.filter((f) =>
                (this.matchStrings(searchParams.from, f.departureLoc) &&
                    this.matchStrings(searchParams.to, f.arrivalLoc)));
            filteredFlights.forEach((f) =>
                filteredListings.push(...listings.filter((l) => (l.flightInfo.flightNumber === f.flightNumber))))
        }
        let filteredDates = filteredListings.filter((l)=> l.flightInfo.date === searchParams.date);
        const items = filteredDates.map((l) =>
            <ShelfItem
                listing={l}
                onBookClick={onBookClick}
                flight={flights.find((f)=>(f.flightNumber === l.flightInfo.flightNumber))}/>
        )
        return (
            <div className="result-shelf">
                {items}
            </div>
        )
    }
}

export default ResultsShelf;