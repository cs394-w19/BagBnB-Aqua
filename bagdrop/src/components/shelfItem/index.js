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
                        <span>{flightInfo.departureLoc}</span>
                        <span>{flightInfo.arrivalLoc}</span>
                    </div>
                    <div>
                        <span>{flightInfo.departureTime}</span>
                        <span>{flightInfo.arrivalTime}</span>
                    </div>
                    <div>{flightInfo.flightNo}</div>
                </span>

                <span className="shelf-item-user">
                    <div>{listing.vendorName}</div>
                    <div>{listing.price}</div>
                    <div>{listing.weight}</div>
                </span>
            </div>
        )
    }
}

export default ShelfItem;