import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss'
//components
import SellInfo from '../sellInfo'

class SellLuggageAllowance extends Component {
    

    render() {
        const { db, flights } = this.props;
        return (
            <div className='results-screen'>
            <div className="header-styling"><h1>Enter Flight and Baggage Allowance Details:</h1></div>
                <SellInfo db={db} flights={flights}/>
            </div>
        )
    }
}

export default withRouter(SellLuggageAllowance);
