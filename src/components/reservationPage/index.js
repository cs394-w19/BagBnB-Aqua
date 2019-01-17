import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ShelfItem from "../shelfItem";
import "./style.scss"


class ReservationScreen extends Component {
    render() {
        return (
            <div className="lazy-reservation-styling">
                <h2>Reservations</h2>
            </div>
        );
    }
}

export default withRouter(ReservationScreen);