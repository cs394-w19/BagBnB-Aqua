import React, { Component } from 'react';
import './style.scss';

class ShelfItem extends Component {

    bold = () =>{
        const listing  = this.props.listing
        console.log(listing);
        document.getElementById(listing.flightInfo.departureLoc).style.border = "8px Solid Black";
    };

    render() {
        const listing  = this.props.listing
        console.log(listing)
        const flightInfo = listing.flightInfo
        return (
            <div className="shelf-item" id = {flightInfo.departureLoc} onClick={() => this.bold()}>
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