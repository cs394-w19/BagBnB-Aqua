import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss';


class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="homepage-options">
                    <button className="homepage-options-buttons" onClick={() =>
                        this.props.history.push("/listings")
                    }>
                        Buy Luggage Allowance
                    </button>

                    <button className="homepage-options-buttons">
                        Sell Luggage Allowance
                    </button>


                </div>
                <button className="homepage-options-buttons" onClick={() =>
                    this.props.history.push("/reservations")
                }>
                    See Reservations
                </button>
            </div>

        )

    }


}

export default withRouter(Homepage);