import React, {Component} from "react";
import "./style.scss";


class ShelfItem extends Component {

    render() {
        const listing = this.props.listing;
        const flightInfo = listing.flightInfo;
        return (
            <div className="shelf-item">
                <div className="shelf-item-info">
                    <div className="shelf-item-info-flight">
                        <div className="shelf-item-info-flight-vendor">{listing.vendorName}</div>
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
                        <span> ${listing.price}</span>
                        <span>{listing.weight}lb</span>

                        <button
                            className={"shelf-item-book-button"}
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
