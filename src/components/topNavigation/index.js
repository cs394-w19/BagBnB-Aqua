import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style.scss";


import logo from "../../logo.svg";
import back from "../../back.svg";


class TopNavigation extends Component {
	render() {
		return (
			<div className="header">
				<button className="TopNavigationButton" onClick={() => this.props.history.goBack()}><img className="TopNavigationButton-image" src={back} alt="back"/></button>
				<img className="logo" src={logo} alt="Bagdrop" onClick={() => this.props.history.push('/')} />
			</div>
		);
	}
}

export default withRouter(TopNavigation)
