import React, {Component} from "react";
import { withRouter} from "react-router-dom";
import "./style.scss";

class Homepage extends Component {

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
                    <button className="homepage-luggage-buttons"
                        onClick={() => this.props.history.push("/new")}>
                        Sell Luggage Allowance
                    </button>
                </div>
                <button
                    className="homepage-reservation-buttons"
                    onClick={() => this.props.history.push("/reservations")}
                >
                    Your Reservations
                </button>
                <button
                    className="homepage-reservation-buttons"
                    onClick={() => this.props.history.push("/yourlistings")}
                >
                    Your Listings
                </button>
            </div>
        )
    }
}


export default withRouter(Homepage);
