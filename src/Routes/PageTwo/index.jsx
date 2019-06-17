import React from "react";
import Map from "../../Components/Map"
import { connect } from "react-redux";
import "./index.css";

class PageTwo extends React.Component {
    render() {
        return (
            <div className="pageTwo">
                <Map />
                <div className="menu">
                    <h3>Company Address: </h3> <h5>{this.props.company.billing_address.formatted_address}</h5>
                    <h3>To Address: </h3> <h5>{this.props.address.to.formatted_address}</h5>
                    <h3>From Address: </h3> <h5>{this.props.address.from.formatted_address}</h5>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        company: state.AppReducer.company,
        address: state.AppReducer.address
    }
}

export default connect(mapStateToProps)(PageTwo)