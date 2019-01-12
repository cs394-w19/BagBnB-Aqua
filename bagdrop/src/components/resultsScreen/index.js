import React, { Component } from 'react';
import ResultsShelf from '../resultsShelf'
import SearchInfo from '../searchInfo'
import data from '../../data/data.json'

class ResultsScreen extends Component {
    render() {
        return (
            <div>
                <SearchInfo searchParams={this.props.searchParams}/>
                <ResultsShelf listings={data.listings} />
            </div>
        )
    }
}

export default ResultsScreen;