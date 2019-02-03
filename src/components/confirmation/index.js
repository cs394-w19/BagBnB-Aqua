import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
//styles
import "./style.scss";
//images
import userImage from "../../userpicture.svg";
//node dependencies
const qs = require('query-string');

class Confirmation extends Component {
    constructor(props) {
        super(props);
        const { listings, flights }= this.props
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        const flight = flights.find((f)=> f.flightNumber === listing.flightInfo.flightNumber)
        const timeArray = flight.departureTime.split(':');
        let hour = parseInt(timeArray[0]) - 2
        if (hour < 0) {
            hour += 24;
        }
        let suggestedTime = hour + ":" + timeArray[1]
        if (suggestedTime.length < 5){
            suggestedTime = "0" + suggestedTime
        }
        this.state = {
            meetingTime: suggestedTime
        };
    }

    render() {
        const {listings, onConfirmClick, flights} = this.props;
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        const flight = flights.find((f)=> f.flightNumber === listing.flightInfo.flightNumber)
        return (
            <div className="confirmation-screen">
                <div className="details">
                <span className="details-flight">
                    <span className="details-flight-number">{listing.flightInfo.flightNumber}</span>
                    <div className="details-flight-location">
                        <span>{flight.departureLoc}</span> &#8594;<span> {flight.arrivalLoc}</span>
                    </div>
                    <div className="details-flight-time">
                        <span>{flight.departureTime}</span>&nbsp;&mdash;&nbsp;
                        <span>{flight.arrivalTime}</span>
                    </div>
                </span>
                    <span className="details-seller">
                        <img className="details-seller-image" src={userImage} alt={listing.listedBy}/>
                        <p className="details-seller-username">{listing.listedBy}</p>
                    </span>
                </div>
                <div className="details-meeting">
                <p>Meeting Place: {flight.departureLoc} Terminal 5</p>
                <p>Meeting Time:
                    <input
                        className="details-meeting-time"
                        type="time"
                        value={this.state.meetingTime}
                        onChange={(e)=>this.setState({ meetingTime: e.target.value })}/>
                </p>
                </div>
                <div className="details-booking">
                <span className="details-booking-info">
                    <div>${listing.price}</div>
                    <div>{listing.weight} lbs</div>
                </span>
                <button className="details-booking-button" onClick={() => {
                    onConfirmClick(listingId, this.state.meetingTime);
                    this.props.history.push({
                        pathname: "/reservations"
                    });
                }}>
                    Confirm Booking
                </button>
                </div>
            </div>
        )
    }
}


export default withRouter(Confirmation);