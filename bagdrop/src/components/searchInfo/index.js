import React, { Component } from 'react';

class SearchInfo extends Component {
    render(){
        const searchParams = this.props.searchParams;
        return (
            <div>
                <div>{searchParams.from}</div>
                <div>{searchParams.to}</div>
                <div>{searchParams.date}</div>
            </div>

        )
    }
}
export default SearchInfo;