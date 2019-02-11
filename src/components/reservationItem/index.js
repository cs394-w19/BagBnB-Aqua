import React, {Component} from 'react';
import "./style.scss"

import userImage from "../../userpicture.svg";

class ReservationItem extends Component {

    render() {
        const {listing, user, reservation, flight, deleteReservation} = this.props;
        const flightInfo = listing.flightInfo;
        return (
            <div className="reservation">
                <div className="meeting-details">
                    <div className="meeting-details-dt">
                        Meeting Details:
                        <div className="meeting-details-dt-time">{reservation.meetingTime}</div>
                        <div className="meeting-details-dt-date">{flightInfo.date}</div>
                    </div>
                    <div >
                        <div className="meeting-details-airport">{flight.departureLoc}</div>
                        <div className="meeting-details-terminal">T5</div>
                    </div>
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
                        <div className="vendor-details-header">Provided By:</div>
                        <img className="vendor-details-img" src={userImage} alt={listing.listedBy}/>
                        <div className="vendor-details-name">
                            {user.firstName} {user.lastName}
                            {user.isVerified && <span role="img" aria-label="CheckMark" className="checkmark">&#x2705;</span>}
                        </div>
                    </div>
                    <div className="vendor-phone">
                        <div>Phone Number:</div>
                        <a className="vendor-phone-number" href={"tel:"+user.phoneNumber}>
                            {user.phoneNumber}
                        </a>
                    </div>
                </div>
                <div className="delete">
                    <button className="delete-button" onClick= {() => deleteReservation(reservation)}>
                        <div>Cancel Reservation</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default ReservationItem;