import React, { Component } from 'react';
import './style.scss';

class ShelfItem extends Component {
    render() {
        const listing  = this.props.listing
        console.log(listing)
        const flightInfo = listing.flightInfo
        return (
            <div className="shelf-item">

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