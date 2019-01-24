import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import "./index.scss";


import logo from "../../logo.svg";


class TopNavigation extends Component {
	render() {
		return (
			<div className="header">
				<button className="TopNavigationButton" onClick={() => this.props.history.goBack()}> Back</button>
				<img className="logo" src={logo} />
			</div>
		);
	}
}

export default withRouter(TopNavigation)
