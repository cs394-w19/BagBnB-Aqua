import React, { Component } from 'react';
import './style.scss';

const classNames = require('classnames');

class ShelfItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBold: false
        };
    }

    onClick = () =>{
        const prevState = this.state.isBold;
        this.setState({isBold: !prevState});
    };

    render() {
        const listing  = this.props.listing;
        const flightInfo = listing.flightInfo;
        const classname = classNames(
            "shelf-item",
            {"shelf-item-bold": this.state.isBold}
        )
        return (
            <div className={classname} onClick={this.onClick}>
                <span className="shelf-item-flight">
                    <div>
                        <span className="shelf-item-flight-location-and-time">Departure Location: {flightInfo.departureLoc}</span>
                        <span className="shelf-item-flight-location-and-time">Arrival Location: {flightInfo.arrivalLoc}</span>
                    </div>
                    <div>
                        <span className="shelf-item-flight-location-and-time">Departure Time: {flightInfo.departureTime}</span>
                        <span className="shelf-item-flight-location-and-time">Arrival Time: {flightInfo.arrivalTime}</span>
                    </div>
                    <div>{flightInfo.flightNo}</div>
                </span>

                <span className="shelf-item-user">
                    <div>{listing.vendorName}</div>
                    <div>Price (USD): ${listing.price}</div>
                    <div>Weight(lbs): {listing.weight}</div>
                </span>
            </div>
        )
    }
}

export default ShelfItem;