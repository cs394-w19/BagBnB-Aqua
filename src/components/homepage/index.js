import React, {Component} from "react";
import { withRouter} from "react-router-dom";
import "./style.scss";

class Homepage extends Component {

    render() {
        return (
            <div className="homepage">
                <div className="homepage-buy">
                    <button
                        className="homepage-buy-buttons"
                        onClick={() => this.props.history.push("/listings")}
                    >
                        Buy Space
                    </button>
                    <button
                    className="homepage-buy-buttons"
                    onClick={() => this.props.history.push("/reservations")}
                >
                    What I Bought
                </button>
            </div>
                <div className="homepage-buy">
                <button className="homepage-buy-buttons"
                        onClick={() => this.props.history.push("/new")}>
                        Sell Space
                    </button>
                <button
                    className="homepage-buy-buttons"
                    onClick={() => this.props.history.push("/yourlistings")}
                >
                    What I'm Selling
                </button>
            </div>
            </div>
        )
    }
}


export default withRouter(Homepage);
