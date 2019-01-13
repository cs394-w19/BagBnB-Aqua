import React, { Component } from 'react';
import ShelfItem from '../shelfItem';
import './style.scss';

class ResultsShelf extends Component {
    render() {
        const listings = this.props.listings;
        const items = listings.map((l) => <ShelfItem listing={l}/>)
        return (
            <div className="result-shelf">
            	<h1>Search Results:</h1>
                {items}
            </div>
        )
    }
}

export default ResultsShelf;