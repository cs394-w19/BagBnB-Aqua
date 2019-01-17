import React, { Component } from "react";
import "./style.scss";

const classNames = require("classnames");

class ShelfItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBold: false
    };
  }

  onClick = () => {
    const prevState = this.state.isBold;
    this.setState({ isBold: !prevState });
  };

  // formatDate = l => {
  //   let date = toString(l.date);
  //   let dep = toString(l.departureTime);
  //   let arr = toString(l.arrivalTime);
  //   let year = date.split("-")[0];
  //   let month = date.split("-")[1];
  //   let day = date.split("-")[2];
  //   let formattedDate =
  //     toString(month) + "/" + toString(day) + "/" + toString(year);
  //   return formattedDate;
  // };

  render() {
    const listing = this.props.listing;
    const flightInfo = listing.flightInfo;
    const classname = classNames("shelf-item", {
      "shelf-item-bold": this.state.isBold
    });
    return (
      <div className={classname} onClick={this.onClick}>
        <div className="shelf-item-info">
          <div className="shelf-item-info-flight">
            <div className="shelf-item-info-flight-vendor">
              <span>{listing.vendorName}</span>
            </div>
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
            <div> ${listing.price}</div>
            <div>{listing.weight}lb</div>
          </div>
        </div>
        <button
          className={"shelf-item-book-button"}
          onClick={() => this.props.onBookClick(listing.id, "matthewa")}
        >
          Book
        </button>
      </div>
    );
  }
}

export default ShelfItem;
