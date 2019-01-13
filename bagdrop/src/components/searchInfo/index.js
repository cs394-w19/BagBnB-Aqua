import React, { Component } from 'react';

class SearchInfo extends Component {

    handleFromChange(e) {
        this.props.onFromChange(e.target.value)
    }
    handleToChange(e) {
        this.props.onToChange(e.target.value)
    }
    handleDateChange(e) {
        this.props.onDateChange(e.target.value)
    }
    render(){
        const searchParams = this.props.searchParams;
        return (
            <div>
                <input type="text" name="From" value={searchParams.from} onChange={this.handleFromChange}/>
                <input type="text" name="To" value={searchParams.to} onChange={this.handleToChange}/>
                <input type="text" name="Date" value={searchParams.date} onChange={this.handleDateChange}/>
            </div>

        )
    }
}
export default SearchInfo;