import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style.scss';


class Homepage extends Component {
    render() {
    	const divStyle = {
  			color: 'white',
  			backgroundColor: '#1c2833',
  			borderColor: 'black',
  			padding: '10px'
		};
        return (
            <div>
                <div className="homepage-options">
                    <button style={divStyle} className="homepage-options-buttons" onClick={() =>
                        this.props.history.push("/listings")
                    }>
                        Buy Luggage Allowance
                    </button>

                    <button style={divStyle} className="homepage-options-buttons">
                        Sell Luggage Allowance
                    </button>


                </div>
                <button style={divStyle} className="homepage-options-buttons" onClick={() =>
                    this.props.history.push("/reservations")
                }>
                    See Reservations
                </button>
            </div>

        )

    }


}

export default withRouter(Homepage);