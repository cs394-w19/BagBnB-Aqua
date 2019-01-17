import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import reservationData from "../../data/reservations.json";
import usersData from "../../data/user.json";
import ReservationItem from "../reservationItem";
const qs = require('query-string');


class ReservationScreen extends Component {

    retrieveReservations(username) {
        return reservationData.reservations.filter((r) =>
            (r.buyerUsername === username)
        );
    }

    render() {

        const username = qs.parse(this.props.location.search).username;
        const filteredReservations = this.retrieveReservations(username);
        const items = filteredReservations.map((r) => {
            const listings = this.props.listings;
            const listing = listings.find((l) => (l.id === r.listingId));
            const vendorUser = usersData.users.find((u) => (u.username === r.vendorUsername));
            console.log(listing);

            return (
                <ReservationItem reservation={r} listing = {listing} user = {vendorUser}/>
            )
        });

        const user = usersData.users.find((u) => (u.username === username));
        if(filteredReservations.length === 0){
            return(
                <div>
                    <h1>
                        Reservations for {user.firstName} {user.lastName}:
                    </h1>
                    <div>
                        No Reservations!
                    </div>
                </div>
            )
        }

        return (
            <div>
                <h1>
                    Reservations for {user.firstName} {user.lastName}:
                </h1>
                <div>
                    {items}
                </div>
            </div>
        );
    }
}

export default withRouter(ReservationScreen);