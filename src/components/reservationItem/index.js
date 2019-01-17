import React, {Component} from 'react';

class ReservationItem extends Component {

    render() {
        const {listing, user} = this.props;
        const flightInfo = listing.flightInfo;
        return (
            <div>
                <span>
                    <h2>Flight Info:</h2>
                    <p>Departure: {flightInfo.departureLoc} {flightInfo.departureTime}</p>
                    <p>Arrival: {flightInfo.arrivalLoc} {flightInfo.arrivalTime}</p>
                    <p>Flight Number: {flightInfo.flightNumber}</p>
                </span>
                <span>
                    <h2>Vendor Info:</h2>
                    <p>Name: {user.firstName} {user.lastName}</p>
                    <p>Phone Number: {user.phoneNumber}</p>
                </span>
            </div>
        );
    }
}

export default ReservationItem;