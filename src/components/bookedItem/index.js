import React, {Component} from 'react';
import "./style.scss"

import userImage from "../../userpicture.svg";
import chatImage from "../../chat.svg";

class BookedItem extends Component {

    render() {
        const {listing, user, reservation, flight} = this.props;
        const flightInfo = listing.flightInfo;
        return (
            <div className="reservation">
                <div className="meeting-details">
                    <div className="meeting-details-dt">
                        Meeting Details:
                        <div className="meeting-details-dt-time">{reservation.meetingTime}</div>
                        <div className="meeting-details-dt-date">{flightInfo.date}</div>
                    </div>
                    <div className="meeting-details-terminal">T5</div>
                </div>
                <div className="flight-listing-container">
                    <div className="flight-details">
                        Flight Info:
                        <div className="flight-details-number">{flightInfo.flightNumber}</div>
                        <div className="flight-details-location">
                            <span>{flight.departureLoc}</span> &#8594;
                            <span> {flight.arrivalLoc}</span>
                        </div>
                        <div className="flight-details-time">
                            <span>{flight.departureTime}</span>
                            &nbsp;&mdash;&nbsp;
                            <span>{flight.arrivalTime}</span>
                        </div>
                    </div>
                    <div className="listing-details">
                        <div className="listing-details-price">${listing.price}</div>
                        <div className="listing-details-weight">{listing.weight} lbs</div>
                    </div>
                </div>
                <div className="vendor">
                    <div className="vendor-details">
                        <div className="vendor-details-header">Booked By:</div>
                        <img className="vendor-details-img" src={userImage} alt={listing.listedBy}/>
                        <div className="vendor-details-name">{user.firstName} {user.lastName}</div>
                    </div>
                    <button className="vendor-button">
                        <img className="vendor-button-img" src={chatImage} alt="chat"/>
                        <div>Chat</div>
                        </button>
                </div>
            </div>
        )
    }
}

export default BookedItem;