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
        const listings = this.props.listings;
        const username = qs.parse(this.props.location.search).username;
        const filteredReservations = this.retrieveReservations(username);
        const items = filteredReservations.map(r => {
            const listing = listings.find(l => l.id === r.listingId);
            const vendorUser = usersData.users.find(
                u => u.username === listing.listedBy
            );
            return (
                <ReservationItem
                    reservation={r}
                    listing={listing}
                    user={vendorUser}
                />
            );
        });

        if (filteredReservations.length === 0) {
            return (
                <div>
                    <h2>
                        Your Reservations:
                    </h2>
                    <h2>No Reservations!</h2>
                </div>
            );
        }

        return (
            <div className="lazy-reservation-styling">
                <h2>
                    Your Reservations:
                </h2>
                <div>{items}</div>
            </div>
        );
    }
}

export default withRouter(ReservationScreen);
