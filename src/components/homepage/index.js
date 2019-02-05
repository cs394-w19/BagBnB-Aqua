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
                        Buy Space
                    </button>
                    <button className="homepage-luggage-buttons"
                        onClick={() => this.props.history.push("/new")}>
                        Sell Space
                    </button>
                </div>
                <div className="homepage-reservation">
                <button
                    className="homepage-reservation-buttons"
                    onClick={() => this.props.history.push("/reservations")}
                >
                    My Scheduled Drops
                </button>
                <button
                    className="homepage-reservation-buttons"
                    onClick={() => this.props.history.push("/yourlistings")}
                >
                    My Scheduled Pick-Ups
                </button>
                </div>
            </div>
        )
    }
}


export default withRouter(Homepage);
