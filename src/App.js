import React, { Component } from "react";
import ResultsScreen from "./components/resultsScreen";
import Confirmation from "./components/confirmation";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";

import reservations from "./data/reservations.json";
import data from "./data/data.json";
import "./App.scss";
import TopNavigation from "./components/topNavigation"
import firestore from './components/firestore.js';

class App extends Component {

    onConfirmClick = (listingId, username) => {

        let listing = data.listings.find(l => l.id === listingId);
   //     var firebase = require('firebase/app');
     //   require('firebase/firestore');
        /*
     //   var serviceAccount = require("./bagdrop-eddd8-firebase-adminsdk-wenn2-9b200934dc.json");
        var config = {
            apiKey: "AIzaSyACPZsC5-LVZ5qTrZK8QnsEDDwbC4sfgQI",
            authDomain: "bagdrop-eddd8.firebaseapp.com",
            databaseURL: "https://bagdrop-eddd8.firebaseio.com",
        };
        firebase.initializeApp(config);
        console.log(typeof firebase);*/
        console.log(firestore);
        var db = firestore();

        const items = db.collection("reservations");
        console.log(items);
        const reservation = {
            vendorUsername: listing.listedBy,
            buyerUsername: username,
            listingId: listingId
        };
        db.collection("reservations")
            .doc("0")
            .set(reservation)
            .then((res) => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        listing.booked = true;
        listing.bookedBy = username;
    };

    render() {
        return (
            <BrowserRouter>

                <div className="app">
                    <TopNavigation />
                    <div className="screen">
                        <Route exact path="/" render={() => <Homepage />} />
                        <Route
                            path="/listings"
                            render={() => (
                                <ResultsScreen listings={data.listings} />
                            )}
                        />
                        <Route
                            path="/confirmation"
                            render={() => (
                                <Confirmation
                                    listings={data.listings}
                                    onConfirmClick={this.onConfirmClick}
                                />
                            )}
                        />
                        <Route
                            path="/reservations"
                            render={() => (
                                <ReservationsScreen listings={data.listings} />
                            )}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
