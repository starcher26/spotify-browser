import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setToken } from "./actions/tokenActions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=018dfac59b5e4d58a6a3412459e5a2e3&response_type=token&redirect_uri=http://localhost:3000/callback";
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string
};

// Map state to components props
const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token
  };
};

// Map dispatch (actions) to components props
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setToken
    },
    dispatch
  );
};

// connect components to redux store
// We map the stores states and
// dispatch to the components props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
