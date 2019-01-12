import React, { Component } from 'react';

class ShelfItem extends Component {
    render() {
        const listing  = this.props.listing
        const flightInfo = listing.flightInfo
        return (
            <div>
                <span className="flight-info">
                    <div>${flightInfo.departureLoc}</div>
                    <div>${flightInfo.arrivalLoc}</div>
                    <div>${flightInfo.departureTime}</div>
                    <div>${flightInfo.arrivalTime}</div>
                </span>
                <span className="user-info">
                    <div>${listing.vendorName}</div>
                    <div>${listing.price}</div>
                    <div>${listing.weight}</div>
                </span>
            </div>
        )
    }
}