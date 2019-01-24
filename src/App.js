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



class App extends Component {

    onConfirmClick = (listingId, username) => {

        let listing = data.listings.find(l => l.id === listingId);
        var admin = require("firebase-admin");

        var serviceAccount = require("./bagdrop-eddd8-firebase-adminsdk-wenn2-9b200934dc.json");

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://bagdrop-edd8.firebaseio.com"
        });
        var db = admin.firestore();

        var docRef = db.collection("users").doc("0");

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });


        const items = db.collection("reservations");
        console.log(items);
        const reservation = {
            vendorUsername: listing.listedBy,
            buyerUsername: username,
            listingId: listingId
        };
        db
            .collection("reservations")
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

      //  console.log(reservation);
     //   reservations.reservations.push(reservation);
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
