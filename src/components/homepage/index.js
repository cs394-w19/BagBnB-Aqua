import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "./style.scss";
import buyImg from "../../guest.svg"
import sellImg from "../../people.svg"

class Homepage extends Component {

    render() {
        return (
            <div className="homepage">
                <div className="homepage-buy">
                    <img className="homepage-buy-img" src={buyImg} alt="buy"/>
                    <button
                        className="homepage-buy-buttons"
                        onClick={() => this.props.history.push("/listings")}
                    >
                        Buy Space
                    </button>
                    <button
                        className="homepage-buy-buttons homepage-buy-buttons-grey"
                        onClick={() => this.props.history.push("/reservations")}
                    >
                        What I Bought
                    </button>
                </div>
                <div className="homepage-sell">
                    <img className="homepage-sell-img" src={sellImg} alt="sell"/>
                    <button className="homepage-sell-buttons"
                            onClick={() => this.props.history.push("/new")}>
                        Sell Space
                    </button>
                    <button
                        className="homepage-sell-buttons homepage-sell-buttons-grey"
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
