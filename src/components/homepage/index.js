import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


class Homepage extends Component {
	render(){
		return(
			<div>
				<button onClick={() => 
                    
                    this.props.history.push("/listings")
                }>
				Buy Luggage Allowance
				</button>

				<button>
				Sell Luggage Allowance
				</button>
			</div>

		)

	}



}

export default withRouter(Homepage);