import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import BookedItem from "../bookedItem";

import UnbookedItem from "../unbookedItem";
import "./style.scss";
const classname = require('classnames');

class SellerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBooked: true
        }
    }
    onBookClick() {
        this.setState({
            showBooked: true
        })
    }
    onUnbookClick() {
        this.setState({
            showBooked: false
        })
    }
    render() {
        const {flights, listings, reservations, users} = this.props;
        const username = this.props.user;
        const bookedListings = listings.filter(l=> l.listedBy === username && l.booked===true);
        const unbookedListings = listings.filter(l=> l.listedBy === username && l.booked===false);
        const bookedItems = bookedListings.map(l=>{
            const flight = flights.find(f=>f.flightNumber === l.flightInfo.flightNumber)
            const reservation = reservations.find(r=>r.listingId === l.id)
            const buyer = users.find(
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
         const bookedClassName = classname(
            "SellerScreen-tab-button",
            {"SellerScreen-tab-button-active": this.state.showBooked})
         const unBookedClassName = classname(
            "SellerScreen-tab-button",
            {"SellerScreen-tab-button-active": !this.state.showBooked})
        return (
            <div className="SellerScreen">
            <div className = "SellerScreen-tab">
                <button onClick={this.onBookClick.bind(this)} className = {bookedClassName}>
                    Booked Listings
                </button>
                <button onClick={this.onUnbookClick.bind(this)} className = {unBookedClassName}>
                    Unbooked Listings
                </button>
            </div>
            {
                this.state.showBooked ? <div>{bookedItems}</div> : <div>{unbookedItems}</div>
            }
            </div>
        );
    }
}

export default withRouter(SellerScreen);
