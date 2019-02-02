import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import "./style.scss";

import ReservationItem from "../reservationItem";

import usersData from "../../data/user.json";

const qs = require("query-string");

class ReservationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
    }

    componentDidMount() {
        const db = this.props.db;
        const username = qs.parse(this.props.location.search).username;
        let reservations = []
        db.collection("reservations").get().then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                if (doc.data().buyerUsername === username){
                    reservations.push({
                        listingId: doc.id,
                        ...doc.data()
                    })
                }
            });
            this.setState({reservations: reservations})
        })
    }


    render() {
        const {flights, listings} = this.props;
        const items = this.state.reservations.map(r => {
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
                />
            );
        });

        return (
            <div className="lazy-reservation-styling">
                <h2>
                    Your Reservations:
                </h2>
                <div>{items}</div>
                {this.state.reservations.length === 0 && <h2>No Reservations!</h2>}
            </div>
        );
    }
}

export default withRouter(ReservationScreen);
