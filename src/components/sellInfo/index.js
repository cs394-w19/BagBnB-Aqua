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
            "listedBy":this.listedBy
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
        
        return (
            <div className="listing-form">
                <form className="listing-form-input">
                    Price: <input placeholder="price" 
                        type="text" defaultValue={this.price} onChange={this.handlePriceChange}/>
                    Weight: <input placeholder="weight"
                        type="text" defaultValue={this.weight} onChange={this.handleWeightChange}/>
                    FlightNumber: <input placeholder=""
                        type="text" defaultValue={this.flightNumber} onChange={this.handleFlightNumberChange}/>
                    theDate: <input
                        type="date" defaultValue={this.date} onChange={this.handleDateChange}/>
                </form>
                <button onClick={this.onCreateClick}>Create Listing</button>
            </div>
        )
    }
}

export default SellInfo;
