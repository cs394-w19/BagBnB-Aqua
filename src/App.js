//Dependencies
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
//styles
import "./App.scss";
//components
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";
import TopNavigation from "./components/topNavigation"
import ResultsScreen from "./components/resultsScreen";
import Confirmation from "./components/confirmation";
//data
import data from "./data/data.json";
import reservationData from "./data/reservations.json";


class App extends Component {

    onConfirmClick = (listingId, username, meetingTime) => {
        let listing = data.listings.find(l => l.id === listingId);
        listing.booked = true;
        reservationData.reservations.push({
            "buyerUsername": username,
            "listingId":listingId,
            "meetingTime": meetingTime
        })
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
