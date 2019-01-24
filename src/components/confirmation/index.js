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
        const { listings, onConfirmClick } = this.props;
        const listingId = qs.parse(this.props.location.search).id;
        const listing = listings.find((l) => l.id === listingId);
        return <div className="lazy-confirmation-styling">
            <h2>Booking details:</h2>
            <p>Carrier: {listing.listedBy}</p>
            <p>Price: {listing.price}</p>
            <p>Weight: {listing.weight}</p>
            <p>Date of Flight: {listing.flightInfo.date}</p>
            <p>Time of Flight: {listing.flightInfo.departureTime}</p>
            <button className="confirm-booking" onClick={() => {
            onConfirmClick(listingId, "karenk");
                getHistory().push({
                  pathname: "/reservations",
                  search: "?username=" + "karenk"
                });
              }}>
              Confirm Purchase
            </button>

            <button
              onClick={() => getHistory().push("/listings")}
            >
              {" "}
              Back
            </button>
          </div>;
    }
}


export default withRouter(Confirmation);