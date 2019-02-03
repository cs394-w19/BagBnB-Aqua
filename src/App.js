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
import SellInfo from "./components/sellInfo";
import Confirmation from "./components/confirmation";
import firestore from "./firestore";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            flights: [],
            reservations: []
        };
        this.db = firestore();
        this.deleteReservation = this.deleteReservation.bind(this);
    }

    componentDidMount() {
        this.db.collection("listings").get().then((querySnapshot) => {
            let listings = [];
            let flights = [];
            let reservations = [];
            querySnapshot.forEach((doc) => {
                listings.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            this.db.collection("flights").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    flights.push(doc.data())
                });
                flights.sort(function(a, b){
                    return a.flightNumber-b.flightNumber
                })
                this.db.collection("reservations").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                            reservations.push({
                                listingId: doc.id,
                                ...doc.data()
                            })
                    })

                    this.setState({
                        listings: listings,
                        flights: flights,
                        reservations: reservations
                    })
                })
            })
        })
    }

    deleteReservation(reservation) {
        let state = this.state;
        let listing = state.listings.find(l => l.id === reservation.listingId);
        this.db.collection("reservations")
            .doc(reservation.listingId).delete()
            .then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
            console.error("Error removing document: ", error);
        });

        listing.booked = false;
        this.db.collection("listings")
            .doc(reservation.listingId)
            .set(listing)
            .then(res => {
                console.log("Document successfully written!")
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        state.reservations = state.reservations.filter(r=> r.listingId !== reservation.listingId)
        this.setState(state);
    }

    onConfirmClick = (listingId, username, meetingTime) => {
        let state = this.state;
        let listing = state.listings.find(l => l.id === listingId);
        listing.booked = true;
        let reservation = {
            "buyerUsername": username,
            "meetingTime": meetingTime
        };
        state.reservations.push({...reservation, listingId: listingId});
        this.db.collection("reservations")
            .doc(listingId)
            .set(reservation)
            .then(res => {
                console.log("Document successfully written!")
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        this.db.collection("listings")
            .doc(listingId)
            .set(listing)
            .then(res => {
                console.log("Document successfully written!")
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        this.setState(state);
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
                                <ResultsScreen listings={this.state.listings} flights={this.state.flights}/>
                            )}
                        />
                        <Route
                            path="/new"
                            render={() => (
                                <SellInfo db={this.db} flights={this.state.flights}/>
                            )}
                        />
                        <Route
                            path="/confirmation"
                            render={() => (
                                <Confirmation
                                    listings={this.state.listings}
                                    onConfirmClick={this.onConfirmClick}
                                    flights={this.state.flights}
                                />
                            )}
                        />
                        <Route
                            path="/reservations"
                            render={() => (
                                <ReservationsScreen listings={this.state.listings} flights={this.state.flights} db={this.db} reservations = {this.state.reservations} deleteReservation = {this.deleteReservation}/>
                            )}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
