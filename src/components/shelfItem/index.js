import React, {Component} from "react";
import "./style.scss";


class ShelfItem extends Component {
    render() {
        const listing = this.props.listing;
        const flightInfo = listing.flightInfo;
        return (
            <div className="shelf-item">
                <div className="shelf-item-carrier">{listing.vendorName}</div>
                <div className="shelf-item-info">
                    <div className="shelf-item-info-flight">
                        <div className="shelf-item-info-flight-number">{flightInfo.flightNumber}</div>
                        <div className="shelf-item-info-flight-location">
                            <span>{flightInfo.departureLoc}</span> &#8594;
                            <span> {flightInfo.arrivalLoc}</span>
                        </div>
                        <div className="shelf-item-info-flight-time">
                            <span>{flightInfo.departureTime}</span>
                            &nbsp;&mdash;&nbsp;
                            <span>{flightInfo.arrivalTime}</span>
                        </div>
                    </div>
                    <div className="shelf-item-info-baggage">
                        <div className="shelf-item-info-baggage-details">
                            <span> ${listing.price}</span>
                            <span>|</span>
                            <span>{listing.weight}lb</span>
                        </div>
                        <button
                            className="shelf-item-info-baggage-button"
                            onClick={() => this.props.onBookClick(listing.id, "matthewa")}
                        >
                            Book
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ShelfItem;
