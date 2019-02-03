import React, {Component} from "react";
import "./style.scss";


class ShelfItem extends Component {

    render() {
        const { listing, flight } = this.props;
        return (
            <div className="shelf-item">
                <div className="shelf-item-carrier">{flight.carrier}</div>
                
                <div className="shelf-item-info">
                    <div className="shelf-item-info-flight">
                        <div className="shelf-item-info-flight-number">{flight.flightNumber}</div>
                        <div className="shelf-item-info-flight-location">
                            <span>{flight.departureLoc}</span> &#8594;
                            <span> {flight.arrivalLoc}</span>
                        </div>
                        <div className="shelf-item-info-flight-time">
                            <span>{flight.departureTime}</span>
                            &nbsp;&mdash;&nbsp;
                            <span>{flight.arrivalTime}</span>
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
