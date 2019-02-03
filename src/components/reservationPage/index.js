import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import "./style.scss";

import ReservationItem from "../reservationItem";

import usersData from "../../data/user.json";

import firestore from "../../firestore.js";

const qs = require("query-string");

class ReservationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            listings: []
        };
    }


    render() {
        const {flights, listings} = this.props;
        const username = this.props.user;
        this.reservations = this.props.reservations.filter(r => r.buyerUsername === username);
        const items = this.reservations.map(r => {
            const listing = listings.find(l => l.id === r.listingId);
            const flight = flights.find((f) => f.flightNumber === listing.flightInfo.flightNumber)
            const vendorUser = usersData.users.find(
                u => u.username === listing.listedBy
            );
            return (
                <ReservationItem
                    reservation={r}
                    listing={listing}
                    user={vendorUser}
                    flight={flight}
                    deleteReservation = {this.props.deleteReservation}
                />
            );
        });

        return (
            <div className="lazy-reservation-styling">
                <h2>
                    Your Reservations:
                </h2>
                <div>{items}</div>
                {this.reservations.length === 0 && <h2>No Reservations!</h2>}
            </div>
        );
    }
}

export default withRouter(ReservationScreen);
