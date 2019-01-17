import React, {Component} from 'react';

class ReservationItem extends Component {

    render() {
        const listing = this.props.listing;
        return (
            <div>
                <span>Flight Info:
                    <div>
                        <div>
                        Departure: {listing.flightInfo.departureLoc} {listing.flightInfo.departureTime}
                        </div>
                        <div>
                        Arrival: {listing.flightInfo.arrivalLov} {listing.flightInfo.arrivalTime}
                        </div>
                        <div>
                            Flight Number: {listing.flightInfo.flightNumber}
                        </div>
                    </div>
                </span>
                <span>
                    Vendor Info:
                    <div>
                        Name: {this.props.user.firstName} {this.props.user.lastName}
                    </div>
                    <div>
                        Phone Number: {this.props.user.phoneNumber}
                    </div>

                </span>

            </div>

        );
    }

}

export default ReservationItem;