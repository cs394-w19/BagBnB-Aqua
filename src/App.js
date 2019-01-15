import React, {Component} from 'react';
import './App.css';
import ResultsScreen from './components/resultsScreen'
import Confirmation from './components/confirmation'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from "./components/homepage"

import data from './data/data.json'

class App extends Component {

    onConfirmClick = (listingId, username) => {
        let listing = data.listings.find((l) => l.id === listingId);
        listing.booked = true;
        listing.bookedBy = username;
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path='/' render={ () => (
                        <Homepage />
                    )}
                    />
                    <Route path='/listings' render={() => (
                        <ResultsScreen listings={data.listings}/>
                    )
                    }/>
                    <Route path='/confirmation' render={() => (
                        <Confirmation
                            listings={data.listings}
                            onConfirmClick={this.onConfirmClick}/>
                    )
                    }/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
