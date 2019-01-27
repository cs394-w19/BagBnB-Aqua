import React, {Component} from 'react';
import "./style.scss"

import userImage from "../../userpicture.svg";
import chatImage from "../../chat.svg";

class ReservationItem extends Component {

    render() {
        const {listing, user, reservation} = this.props;
        const flightInfo = listing.flightInfo;
        return (
            <div className="reservation">
                <div className="meeting-details">
                    <div className="meeting-details-dt">
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
                            <span>{flightInfo.departureLoc}</span> &#8594;
                            <span> {flightInfo.arrivalLoc}</span>
                        </div>
                        <div className="flight-details-time">
                            <span>{flightInfo.departureTime}</span>
                            &nbsp;&mdash;&nbsp;
                            <span>{flightInfo.arrivalTime}</span>
                        </div>
                    </div>
                    <div className="listing-details">
                        <div className="listing-details-price">${listing.price}</div>
                        <div className="listing-details-weight">{listing.weight} lbs</div>
                    </div>
                </div>
                <div className="vendor">
                    <div className="vendor-details">
                        <div className="vendor-details-header">Provided By:</div>
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

export default ReservationItem;