import React, {Component} from 'react';
import './style.scss';

const classNames = require('classnames');

class ShelfItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBold: false
        };
    }

    onClick = () => {
        const prevState = this.state.isBold;
        this.setState({isBold: !prevState});
    };

    formatDate = (l) => {
        let date = toString(l.date)
        let dep = toString(l.departureTime)
        let arr = toString(l.arrivalTime)
        let year = date.split("-")[0]
        let month = date.split("-")[1]
        let day = date.split("-")[2]
        let formattedDate = toString(month) + "/" + toString(day) + "/" + toString(year)
        return formattedDate
    }

    render() {
        const listing = this.props.listing;
        const flightInfo = listing.flightInfo;
        const classname = classNames(
            "shelf-item",
            {"shelf-item-bold": this.state.isBold}
        )
        return <div className={classname} onClick={this.onClick}>
            <span className="shelf-item-flight">
              <div>
                <span className="shelf-item-flight-vendor-and-number">
                  {listing.vendorName}
                </span>
              </div>
              <div>
                <span className="shelf-item-flight-location-and-time">
                  {flightInfo.departureLoc}
                </span> &#8594;
                  <span className="shelf-item-flight-location-and-time">
                  {flightInfo.arrivalLoc}
                </span>
              </div>
              <div>
                <span className="shelf-item-flight-location-and-time">
                  {flightInfo.departureTime}
                </span>
                  &ndash;
                  <span className="shelf-item-flight-location-and-time">
                  {flightInfo.arrivalTime}
                </span>
              </div>
              <div>
                    <span className="shelf-item-flight-location-and-time">
                        {flightInfo.date}
                    </span>
              </div>
            </span>

            <span className="shelf-item-user">
              <div>Price ${listing.price}</div>
              <div>Weight: {listing.weight} </div>
            </span>
            <button className={"shelf-item-book-btn"} onClick={() => this.props.onBookClick(listing.id, "matthewa")}>
                Book
            </button>
        </div>;
    }
}

export default ShelfItem;