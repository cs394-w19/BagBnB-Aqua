import React, { Component } from 'react';
import ShelfItem from '../shelfItem';
import './style.scss';

class ResultsShelf extends Component {
    matchLocations(searchParams, listing){
        const departure = listing.flightInfo.departureLoc;
        return (listing.flightInfo.departureLoc.includes(searchParams.from.toUpperCase())  || searchParams.from === "")
            && (listing.flightInfo.arrivalLoc.includes(searchParams.to.toUpperCase()) || searchParams.to === "");
    }
    render() {
        const listings = this.props.listings;
        const searchParams = this.props.searchParams;
        const filteredListings = listings.filter((l) =>
            this.matchLocations(searchParams, l));
        const items = filteredListings.map((l) => <ShelfItem listing={l}/>)


        return (
            <div className="result-shelf">
            	<h1>Search Results:</h1>
                {items}
            </div>
        )
    }
}

export default ResultsShelf;