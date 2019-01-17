import React, { Component } from "react";
import ResultsScreen from "./components/resultsScreen";
import Confirmation from "./components/confirmation";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import ReservationsScreen from "./components/reservationPage";

import reservations from "./data/reservations.json";
import data from "./data/data.json";
import "./app.scss";
import logo from "./logo.svg";

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
          <img className="logo" src={logo}/>
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
