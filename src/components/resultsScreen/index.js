import React, { Component } from 'react';
import data from '../../data/data.json'
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

    render() {
        return (
            <div className='results-screen'>
                <SearchInfo
                    searchParams={this.state.searchParams}
                    onFromChange={this.onFromChange}
                    onToChange={this.onToChange}
                    onDateChange={this.onDateChange}/>
                <ResultsShelf
                    listings={data.listings}
                    searchParams={this.state.searchParams}/>
            </div>
        )
    }
}

export default ResultsScreen;