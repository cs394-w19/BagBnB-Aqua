import React, { Component } from 'react';
import ResultsShelf from '../resultsShelf'
import SearchInfo from '../searchInfo'
import data from '../../data/data.json'
import './style.scss'

class ResultsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParams: {
                to: '',
                from: '',
                date: '',
            }
        };
    }

    onFromChange = (from) => {this.setState({searchParams: {
            from: from
        }})};
    onToChange = (from) => {this.setState({searchParams: {
            from: from
        }})};
    onDateChange = (from) => {this.setState({searchParams: {
            from: from
        }})};

    render() {
        return (
            <div className='results-screen'>
                <SearchInfo searchParams={this.state.searchParams} onFromChange={this.onFromChange} onToChange={this.onToChange} onDateChange={this.onDateChange}/>
                <ResultsShelf listings={data.listings} />
            </div>
        )
    }
}

export default ResultsScreen;