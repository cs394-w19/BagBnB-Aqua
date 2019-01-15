import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import ShelfItem from "../shelfItem";


class ReservationScreen extends Component {
    render() {
        return (
            <div>
                Your reservations
            </div>
        );
    }
}

export default withRouter(ReservationScreen);