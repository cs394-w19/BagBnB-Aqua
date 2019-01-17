import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "./style.scss"

const qs = require('query-string');


class Confirmation extends Component {

    render() {
        const {listings, onConfirmClick} = this.props;
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        return <div className="lazy-confirmation-styling">
            <h2>Booking details:</h2>
            <p>Carrier: {listing.listedBy}</p>
            <p>Price: {listing.price}</p>
            <p>Weight: {listing.weight}</p>
            <p>Date of Flight: {listing.flightInfo.date}</p>
            <p>Time of Flight: {listing.flightInfo.departureTime}</p>
            <button className="confirm-booking" onClick={() => {
                onConfirmClick(listingId, "matthewa");
                this.props.history.push({
                  pathname: "/reservations",
                  search: "?username=" + "karenk"
                });
              }}>
              Confirm Booking
            </button>

            <button
              onClick={() => this.props.history.push("/listings")}
            >
              {" "}
              Back
            </button>
          </div>;
    }
}


export default withRouter(Confirmation);