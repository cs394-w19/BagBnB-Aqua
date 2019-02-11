import React, {Component} from 'react';
import "./style.scss"

class UnbookedItem extends Component {

    render() {
        const {listing, flight} = this.props;
        const flightInfo = listing.flightInfo;
        return (
            <div className="reservation">
               <div className="flight-listing-container">
                    <div className="flight-details">
                        Flight Info:
                        <div className="flight-details-number">{flightInfo.flightNumber}</div>
                        <div className="flight-details-location">
                            <span>{flight.departureLoc}</span> &#8594;
                            <span> {flight.arrivalLoc}</span>
                        </div>
                        <div className="flight-details-time">
                            <span>{flight.departureTime}</span>
                            &nbsp;&mdash;&nbsp;
                            <span>{flight.arrivalTime}</span>
                        </div>
                    </div>
                    <div className="listing-details">
                        <div className="listing-details-date">{listing.flightInfo.date}</div>
                        <div className="listing-details-price">${listing.price}</div>
                        <div className="listing-details-weight">{listing.weight} lbs</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UnbookedItem;