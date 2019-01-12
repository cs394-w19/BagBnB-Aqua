import React, { Component } from 'react';
import ShelfItem from '../shelfItem';

class ResultsShelf extends Component {
    render() {
        const listings = this.props.listings;
        const items = listings.map((l) => <ShelfItem listing={l}/>)
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default ResultsShelf;