import React, {Component} from 'react';
import {withRouter} from "react-router-dom"
import "./style.scss";

//const classname = require('classnames');

class SellInfo extends Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFlightNumberChange = this.handleFlightNumberChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.onCreateClick = this.onCreateClick.bind(this);
        this.price = 30;
        this.weight = 50;
        this.flightNumber = "Select Flight";
        this.date = "";
    }

    handlePriceChange(e) {
        this.price = e.target.value
    }

    handleWeightChange(e) {
        this.weight = e.target.value
    }

    handleDateChange(e) {
        this.date = e.target.value
    }

    handleFlightNumberChange(e) {
        this.flightNumber = e.target.value
    }

    onCreateClick = () => {
        if (this.props.user && this.price && this.weight && this.flightNumber && this.date && this.flightNumber !== "Select Flight") {
            const db = this.props.db;
            let listing = {
                "price": this.price,
                "weight": this.weight,
                "flightInfo": {
                    "flightNumber": this.flightNumber,
                    "date": this.date
                },
                "listedBy": this.props.user,
                "booked": false
            }
            db.collection("listings").get().then((querySnapshot) => {
                const index = querySnapshot.size + 1;
                let number = index.toString();
                let numZeroes = 5 - number.length;
                // eslint-disable-next-line
                for (var i of  Array(numZeroes).keys()) {
                    number = "0" + number;
                }
                db.collection("listings")
                    .doc(number)
                    .set(listing)
                    .then(res => {
                        console.log("Document Successfully Written!")
                    })
                    .catch(error => {
                        console.error("Error writing document: ", error)
                    })
                this.props.onCreateClick(
                    {
                        ...listing,
                        id: number
                    }
                )
            })
            this.props.history.push("/yourlistings")
        } else {
            let alertMsg = "Please fill in the following: "
            if (!this.price) {
                alertMsg = alertMsg + " -Price ";
            }
            if (!this.weight) {
                alertMsg = alertMsg + " -Weight";
            }
            if (!this.flightNumber || this.flightNumber === "Select Flight") {
                alertMsg = alertMsg + " -Flight Number";
            }
            if (!this.date) {
                alertMsg = alertMsg + " -Date";
            }
            if (!this.props.user){
                alertMsg = "Please Login First!"
            }
            alert(alertMsg);
        }
    }


    render() {
        const flights = this.props.flights
        let flightOptions = flights.map(f => (
            <option value={f.flightNumber}>{f.flightNumber}</option>
        ))
        flightOptions.unshift(<option value="Select Flight">Select Flight</option>)
        return (
            <div>
                <div className="listing-form">
                    <div className="listing-form-header">Flight and Baggage Allowance Details</div>
                    <div className="listing-form-field">
                        <div className="listing-form-field-label">Flight Number:</div>
                        <select
                            placeholder="Choose Flight"
                            className="listing-form-field-input"
                            onChange={this.handleFlightNumberChange}>
                            {flightOptions}
                        </select>
                    </div>
                    <div className="listing-form-field">
                        <div className="listing-form-field-label">Date:</div>
                        <input
                            type="date"
                            className="listing-form-field-input"
                            defaultValue={this.date}
                            onChange={this.handleDateChange}/>
                    </div>
                    <div className="listing-form-field">
                        <div className="listing-form-field-label">Price (USD):</div>
                        <input
                            placeholder="price"
                            className="listing-form-field-input"
                            type="text"
                            defaultValue={this.price}
                            onChange={this.handlePriceChange}/>
                    </div>
                    <div className="listing-form-field">
                        <div className="listing-form-field-label">Weight (lbs):</div>
                        <input
                            placeholder="weight"
                            className="listing-form-field-input"
                            type="text"
                            defaultValue={this.weight}
                            onChange={this.handleWeightChange}/>
                    </div>
                    <button onClick={this.onCreateClick} className="listing-form-button">Create Listing</button>
                </div>

            </div>
        )
    }
}

export default withRouter(SellInfo);
