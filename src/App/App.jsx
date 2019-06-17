import React from 'react';
import {fetchUser} from "../Actions/actions"
import { connect } from "react-redux";
import './App.css';
import Header from "../Components/Header"
import Router from "./Router"

class App extends React.Component {
  componentDidMount() {
        this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Router/>
      </div>
  );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(null, mapDispatchToProps)(App)