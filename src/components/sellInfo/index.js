import React, {Component} from 'react';
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
        this.flightNumber = "";
        this.date = "";
        this.listedBy = "karenk";
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
        const db = this.props.db;
        let listing = {
            "price":this.price,
            "weight":this.weight,
            "flightInfo": {
                "flightNumber": this.flightNumber,
                "date": this.date
            },
            "listedBy":this.listedBy,
            "booked": false
        }
        db.collection("listings").get().then((querySnapshot) => {
            const index = querySnapshot.size + 1;
            let number = index.toString();
            let numZeroes = 5 - number.length;
            for (var i of  Array(numZeroes).keys()) {
                number = "0" + number;
            }
            console.log(listing)
            db.collection("listings")
                .doc(number)
                .set(listing)
                .then(res=> {
                    console.log("Document Successfully Written!")
                })
                .catch(error=> {
                    console.error("Error writing document: ", error)
                })
        })
    }
    

    render() {
        const flights = this.props.flights
        const flightOptions =  flights.map(f => (
            <option value={f.flightNumber}>{f.flightNumber}</option>
        ))
        return (
            <div>
                <form className="listing-form" onSubmit={this.onCreateClick}>
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
                        <div className="listing-form-field-label">Price:</div>
                        <input
                            placeholder="price"
                            className="listing-form-field-input"
                            type="text"
                            defaultValue={this.price}
                            onChange={this.handlePriceChange}/>
                    </div>
                    <div className="listing-form-field">
                        <div className="listing-form-field-label">Weight:</div>
                        <input
                            placeholder="weight"
                            className="listing-form-field-input"
                            type="text"
                            defaultValue={this.weight}
                            onChange={this.handleWeightChange}/>
                    </div>
                    <button onClick={this.onCreateClick} className="listing-form-button">Create Listing</button>
                </form>

            </div>
        )
    }
}

export default SellInfo;
