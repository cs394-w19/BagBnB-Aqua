import React, { Component } from "react";
import ResultsScreen from "./components/resultsScreen";
import Confirmation from "./components/confirmation";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";

import data from "./data/data.json";
import "./app.scss";
import logo from "./logo.svg";

class App extends Component {
  onConfirmClick = (listingId, username) => {
    let listing = data.listings.find(l => l.id === listingId);
    listing.booked = true;
    listing.bookedBy = username;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <img className="logo" src={logo}></img>
          <Route exact path="/" render={() => <Homepage />} />
          <Route
            path="/listings"
            render={() => <ResultsScreen listings={data.listings} />}
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
            render={() => <ReservationsScreen listings={data.listings} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
