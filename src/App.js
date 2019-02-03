//Dependencies
import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
//styles
import "./App.scss";
//components
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";
import TopNavigation from "./components/topNavigation"
import ResultsScreen from "./components/resultsScreen";
import SellLuggageAllowance from "./components/sellLuggageAllowance";
import Confirmation from "./components/confirmation";
import firestore from "./firestore";
//data
import flightData from "./data/flights.json";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        };
        this.db = firestore();
    }

    componentDidMount() {
        let listings = [];
        this.db.collection("listings").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listings.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            this.setState({listings: listings})
        })
    }

    onConfirmClick = (listingId, username, meetingTime) => {
        let listing = this.state.listings.find(l => l.id === listingId);
        listing.booked = true;
        let reservation = {
            "buyerUsername": username,
            "meetingTime": meetingTime
        };
        this.db.collection("reservations")
            .doc(listingId)
            .set(reservation)
            .then(res => {
                console.log("Document successfully written!")
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };

    render() {
        return (
            <BrowserRouter>

                <div className="app">
                    <TopNavigation/>
                    <div className="screen">
                        <Route exact path="/" render={() => <Homepage/>}/>
                        <Route
                            path="/listings"
                            render={() => (
                                <ResultsScreen listings={this.state.listings} flights={flightData.flights}/>
                            )}
                        />
                        <Route
                            path="/sellLuggageAllowance"
                            render={() => (
                                <SellLuggageAllowance db={this.db}/>
                            )}
                        />
                        <Route
                            path="/confirmation"
                            render={() => (
                                <Confirmation
                                    listings={this.state.listings}
                                    onConfirmClick={this.onConfirmClick}
                                    flights={flightData.flights}
                                />
                            )}
                        />
                        <Route
                            path="/reservations"
                            render={() => (
                                <ReservationsScreen listings={this.state.listings} flights={flightData.flights} db={this.db}/>
                            )}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
