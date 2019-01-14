import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const qs = require('query-string');

class Confirmation extends Component {

    render() {
        const {listings, onConfirmClick} = this.props;
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        return (
            <div>
                <p>
                    Your booking with {listing.listedBy} is confirmed.
                </p>
                <h2>Booking details:</h2>
                <p>Price: {listing.price}</p>
                <p>Weight: {listing.weight}</p>
                <p>Date of Flight: {listing.flightInfo.date}</p>
                <p>Time of Flight: {listing.flightInfo.departureTime}</p>
                <button onClick={() => {
                    onConfirmClick(listingId, "matthewa");
                    this.props.history.push("/listings");
                }}>
                    Confirm Booking
                </button>

                <button onClick={() => 
                    
                    this.props.history.push("/listings")
                }> Back
                </button> 
            </div>
        )
    }
}


export default withRouter(Confirmation);