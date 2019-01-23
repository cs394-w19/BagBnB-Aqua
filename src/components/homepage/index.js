import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./style.scss";

class Homepage extends Component {

    onReserveClick(username) {
        this.props.history.push(
            {
                pathname: "/reservations",
                search: "?username=" + username
            })
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepage-luggage">
                    <button
                        className="homepage-luggage-buttons"
                        onClick={() => this.props.history.push("/listings")}
                    >
                        Buy Luggage Allowance
                    </button>

                    <button className="homepage-luggage-buttons">
                        Sell Luggage Allowance
                    </button>
                </div>
                <button
                    className="homepage-reservation-buttons"
                    //onClick={() => this.props.history.push("/reservations")}
                    onClick={() => this.onReserveClick("karenk")}
                >
                    See Reservations
                </button>
            </div>
        )
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepage-luggage">
                    <button className="homepage-luggage-buttons" onClick={() => this.props.history.push("/listings")}>
                        Buy Luggage Allowance
                    </button>
                    <button className="homepage-luggage-buttons">
                        Sell Luggage Allowance
                    </button>
                </div>
                <div className="homepage-reservation">
                    <button className="homepage-reservation-buttons"
                            onClick={() => this.props.history.push("/reservations")}>
                        See Reservations
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(Homepage);
