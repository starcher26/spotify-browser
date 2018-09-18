import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

class Title extends Component {
	render() {
	  return(
	    <h1 className="title">{this.props.title}</h1>
	  );
	}
}

Title.propTypes = {
  title: PropTypes.string,
  token: PropTypes.string,
};

export default Title;