import React, { Component } from 'react';
import ResultsShelf from '../resultsShelf'
import SearchInfo from '../searchInfo'
import data from '../../data/data.json'
import './style.scss'

class ResultsScreen extends Component {
    render() {
        return (
            <div className='results-screen'>
                <SearchInfo searchParams={this.props.searchParams}/>
                <ResultsShelf listings={data.listings} />
            </div>
        )
    }
}

export default ResultsScreen;