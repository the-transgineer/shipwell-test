import React from 'react';
import { connect } from 'react-redux';
import { valAddress } from "../../Actions/actions"
import PlacesAutocomplete from 'react-places-autocomplete';
import './index.css'
class AddressInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
      if (this.props.to) {
          this.props.valAddress(address, "to")
      } else if (this.props.from) {
          this.props.valAddress(address, "from")
      }
  };
 
  render() {
    return (
      <div>
          {this.props.to && <h1>TO:</h1>}
          {this.props.from && <h1>FROM:</h1>}
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="addressInput">
                <input
                {...getInputProps({
                    placeholder: 'Address...',
                    className: 'location-search-input',
                })}
                />
                <div onClick={() => alert("please use keyboard")} className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                    ? { backgroundColor: '#17A2DC', cursor: 'pointer', color: "white" }
                    : { backgroundColor: '#ffffff', cursor: 'pointer', color: "#17A2DC"};
                    return (
                    <div
                        {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                        })}>
                        <span>{suggestion.description}</span>
                    </div>
                    );
                })}
                </div>
            </div>
            )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        valAddress: (address, type) => dispatch(valAddress(address, type))
    }
}


export default connect(null, mapDispatchToProps)(AddressInput)