import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./style.scss";

import ReservationItem from "../reservationItem";

import reservationData from "../../data/reservations.json";
import usersData from "../../data/user.json";

const qs = require("query-string");

class ReservationScreen extends Component {
    retrieveReservations(username) {
        return reservationData.reservations.filter(
            r => r.buyerUsername === username
        );
    }

    render() {
        const {flights, listings} = this.props;
        const username = qs.parse(this.props.location.search).username;
        const filteredReservations = this.retrieveReservations(username);
        const items = filteredReservations.map(r => {
            const listing = listings.find(l => l.id === r.listingId);
            const flight = flights.find((f)=> f.flightNumber === listing.flightInfo.flightNumber)
            const vendorUser = usersData.users.find(
                u => u.username === listing.listedBy
            );
            return (
                <ReservationItem
                    reservation={r}
                    listing={listing}
                    user={vendorUser}
                    flight={flight}
                />
            );
        });

        return (
            <div className="lazy-reservation-styling">
                <h2>
                    Your Reservations:
                </h2>
                <div>{items}</div>
                {filteredReservations.length === 0 && <h2>No Reservations!</h2>}
            </div>
        );
    }
}

export default withRouter(ReservationScreen);
