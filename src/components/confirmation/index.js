import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import "./style.scss"
import getHistory from 'react-router-global-history'; 
const qs = require('query-string');

 
// export const goToPage = () => (dispatch) => {
//   dispatch({ type: GO_TO_SUCCESS_PAGE });
//   getHistory().push('/success');
// };

class Confirmation extends Component {

    render() {
        const {listings, onConfirmClick} = this.props;
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        const timeArray = listing.flightInfo.departureTime.split(':');
        let hour = parseInt(timeArray[0]) - 2
        if (hour < 0) {
            hour += 24;
        }
        const suggestedTime = hour + ":" + timeArray[1]
        return (
            <div className="confirmation-screen">
                <div className="details">
                <span className="details-flight">
                    <span className="details-flight-number">{listing.flightInfo.flightNumber}</span>
                    <div className="details-flight-location">
                        <span>{listing.flightInfo.departureLoc}</span> &#8594;<span> {listing.flightInfo.arrivalLoc}</span>
                    </div>
                    <div className="details-flight-time">
                        <span>{listing.flightInfo.departureTime}</span>&nbsp;&mdash;&nbsp;
                        <span>{listing.flightInfo.arrivalTime}</span>
                    </div>
                </span>
                    <span className="details-seller">
                        <img className="details-seller-image" src={userImage} />
                        <p className="details-seller-username">{listing.listedBy}</p>
                    </span>
                </div>
                <div className="details-meeting">
                <p>Meeting Place: {listing.flightInfo.departureLoc} Terminal 5</p>
                <p>Meeting Time:
                    <input className="details-meeting-time" type="time" defaultValue={suggestedTime}/>
                </p>
                </div>
                <div className="details-booking">
                <span className="details-booking-info">
                    <div>${listing.price}</div>
                    <div>{listing.weight} lbs</div>
                </span>
                <button className="details-booking-button" onClick={() => {
                    onConfirmClick(listingId, "karenk");
                    this.props.history.push({
                        pathname: "/reservations",
                        search: "?username=" + "karenk"
                    });
                }}>
                    Confirm Booking
                </button>
                </div>

                {/*<button*/}
                    {/*onClick={() => this.props.history.push("/listings")}*/}
                {/*>*/}
                    {/*{" "}*/}
                    {/*Back*/}
                {/*</button>*/}
            </div>
        )
    }
}


export default withRouter(Confirmation);