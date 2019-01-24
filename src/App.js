import React, { Component } from "react";
import ResultsScreen from "./components/resultsScreen";
import Confirmation from "./components/confirmation";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";

import reservations from "./data/reservations.json";
import data from "./data/data.json";
import "./App.scss";
import logo from "./logo.svg";

import { ReactRouterGlobalHistory, getHistory } from 'react-router-global-history';

class App extends Component {
    onConfirmClick = (listingId, username) => {
        let listing = data.listings.find(l => l.id === listingId);
        listing.booked = true;
        listing.bookedBy = username;
    };

    onConfirmClick = (listingId, username) => {
        let listing = data.listings.find(l => l.id === listingId);
        listing.booked = true;
        listing.bookedBy = username;
        const reservation = {
            vendorUsername: listing.listedBy,
            buyerUsername: username,
            listingId: listingId
        };
        console.log(reservation);
        //   var JSON = require('json');
        //    var reservations = JSON.parse(reservations);
        reservations.reservations.push(reservation);
        //     const json = JSON.stringify(reservations);
        //   const fs = require('browserify-fs');
        //     fs.writeFile('r.json', json, (err) => {
        //       if (err) throw err;
        //        console.log('The file has been saved!');
        //   });
    };

    render() {
        return (
            <BrowserRouter>

                <div className="app">
                     <ReactRouterGlobalHistory />
                    <div className="header">
                        <button onClick={() => getHistory.push()}>
                            {" "}
                            Back
                        </button>
                        <img className="logo" src={logo} />
                    </div>
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
