import React, {Component} from 'react';
import "./style.scss";

//const classname = require('classnames');

class SellInfo extends Component {

    render() {
        let price = 30, weight = 50, flightNumber, date;
        let username = "karenk";
        return (
            <div className="listing-form">
                <form className="listing-form-input">
                    <input placeholder="price" 
                        type="text" value={price}/>
                    <input placeholder="weight"
                        type="text" value={weight}/>
                    <input placeholder=""
                        type="text" value={flightNumber}/>
                    <input
                        type="date" value={date}/>
                </form>
            </div>
        )
    }
}

export default SellInfo;
