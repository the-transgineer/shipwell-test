import React from "react";
import AddressInput from "../../Components/AddressInput";
import { connect } from "react-redux";

class PageOne  extends React.Component {
    handleSubmit = () => {
        if(this.props.address.to.formatted_address && this.props.address.from.formatted_address) {
            this.props.history.push("/two");
        } else {
            alert("Please fill out both to and from")
        }
    }
    render() {
        return (
            <div>
                <AddressInput to/>
                <AddressInput from/>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

const MapStateToProps = state => {
    return {address: state.AppReducer.address}
}

export default connect(MapStateToProps)(PageOne)