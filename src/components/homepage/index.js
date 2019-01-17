import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss';


class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
            <h1 className="homepage-title"> Bagdrop </h1>
            <div className="homepage-container">

                <div className="homepage-luggage">
                    <button className="homepage-luggage-buttons" onClick={() =>
                        this.props.history.push("/listings")
                    }>
                        Buy Luggage Allowance
                    </button>

                    <button className="homepage-luggage-buttons">
                        Sell Luggage Allowance
                    </button>
                    </div>
                

                <button className="homepage-reservation-buttons" onClick={() =>
                    this.props.history.push("/reservations")
                }>
                    See Reservations
                </button>
                </div>
            </div>

        )

    }
}

export default withRouter(Homepage);