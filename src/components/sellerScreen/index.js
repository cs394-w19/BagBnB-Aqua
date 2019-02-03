import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import BookedItem from "../bookedItem";

import UnbookedItem from "../unbookedItem";
// import "./style.scss";
import usersData from "../../data/user.json";

class SellerScreen extends Component {

    render() {
        const {flights, listings, reservations} = this.props;
        const username = this.props.user;
        const bookedListings = listings.filter(l=> l.listedBy === username && l.booked===true);
        const unbookedListings = listings.filter(l=> l.listedBy === username && l.booked===false);
        const bookedItems = bookedListings.map(l=>{
            const flight = flights.find(f=>f.flightNumber === l.flightInfo.flightNumber)
            const reservation = reservations.find(r=>r.listingId === l.id)
            const buyer = usersData.users.find(
                u => u.username === reservation.buyerUsername
            );
            return (
                <BookedItem
                    listing={l}
                    flight={flight}
                    reservation={reservation}
                    user={buyer}
                />
            )
        })
        const unbookedItems = unbookedListings.map(l=>{
            const flight = flights.find(f=>f.flightNumber === l.flightInfo.flightNumber)
            return (
                <UnbookedItem
                    listing={l}
                    flight={flight}
                />
            )
        })

        return (
            <div className="lazy-reservation-styling">
                <h2>
                    Your Booked Listings:
                </h2>
                <div>{bookedItems}</div>
                <h2>
                    Your Unbooked Listings:
                </h2>
                <div>{unbookedItems}</div>
            </div>
        );
    }
}

export default withRouter(SellerScreen);
