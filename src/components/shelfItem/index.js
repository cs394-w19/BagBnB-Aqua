import React, {Component} from "react";
import "./style.scss";
import userImg from "../../userpicture.svg"


class ShelfItem extends Component {

    render() {
        const { listing, flight } = this.props;
        return (
            <div className="shelf-item" onClick={() => this.props.onBookClick(listing.id)}>
                <div className="shelf-item-carrier">{flight.carrier}</div>
                
                <div className="shelf-item-info" onClick={() => this.props.onBookClick(listing.id)}>
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
                        <div className="shelf-item-info-baggage-user">
                            <div>
                            <div className="shelf-item-info-baggage-user-header">Listed by: </div>
                            <div className="shelf-item-info-baggage-user-username">{listing.listedBy}</div>
                            </div>
                            <img className="shelf-item-info-baggage-user-img" src={userImg} alt="user"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ShelfItem;
