import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';


class Search extends Component {

	state = {
	  searchTerm: ''
	};

	updateSearchTerm = (e) => {
	  this.setState({
	    searchTerm: e.target.value
	  });
	}

	render() {
		const submitSearch = (searchTerm, token) => {
			this.props.searchArtists(searchTerm, token);
			this.props.updateTitle(searchTerm);
			this.props.updateViewType('search');
		}

	  return(
	    <div className='search-container'>
	      <form className="form-inline my-2 my-lg-0" onSubmit={() => { submitSearch(this.state.searchTerm, this.props.token);}}>
	        <input onChange={this.updateSearchTerm} type='text' placeholder='Search for an artist' />
	        <button onClick={(e) => { e.preventDefault(); submitSearch(this.state.searchTerm, this.props.token);}}>
	          <i className="fa fa-search search" aria-hidden="true"/>
	        </button>
	      </form>
	    </div>
	  );
	}
}

Search.propTypes = {
  searchArtists: PropTypes.func,
	token: PropTypes.string,
	updateTitle: PropTypes.func,
};

export default Search;