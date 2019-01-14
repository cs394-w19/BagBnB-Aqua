import React, { Component } from 'react';
import './style.scss';

import ShelfItem from '../shelfItem';

class ResultsShelf extends Component {
    matchStrings(searchStr, listingStr) {
        return (listingStr.includes(searchStr.toUpperCase()) || searchStr === '')
    }
    render() {
        const { listings, searchParams } = this.props;
        const filteredListings = listings.filter((l) =>
            (this.matchStrings(searchParams.from, l.flightInfo.departureLoc) &&
                this.matchStrings(searchParams.to, l.flightInfo.arrivalLoc)));
        const items = filteredListings.map((l) => <ShelfItem listing={l}/>);

        return (
            <div className="result-shelf">
            	<h1>Search Results:</h1>
                {items}
            </div>
        )
    }
}

export default ResultsShelf;