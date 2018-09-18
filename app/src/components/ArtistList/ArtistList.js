import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ArtistList.css";

import noImage from "../../no_image_available.svg";

class ArtistList extends Component {
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // console.log(this.state);
    // if (
    //   nextProps.token !== "" &&
    //   !nextProps.getArtistsError &&
    //   nextProps.getArtistsPending &&
    //   nextProps.viewType === "artists"
    // ) {
    //   this.props.getPopularArtists(nextProps.token);
    // }
  }
  renderArtists() {
    return this.props.artists.map((artist, i) => {
      const artistAlbumsAction = (artist, token) => {
        this.props.getArtistAlbums(artist.artist.id, token);
        this.props.updateTitle(artist.artist.name);
      };
      return (
        <div
          onClick={() => {
            artistAlbumsAction(artist, this.props.token);
          }}
          className="col-md-6 col-sm-12"
          key={i}
        >
          <div className="artist-item">
            {/* <div>
              <div className="artist-image">
              
              </div>
              <div className="artist-details">
                <p></p>
              </div>
            </div> */}
            <div className="row align-items-center">
              <div className="artist-image col-auto">
                <img
                  src={
                    artist.artist.images[0]
                      ? artist.artist.images[0].url
                      : noImage
                  }
                />
              </div>
              <div className="artist-name col-auto">
                <h5>{artist.artist.name}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row justify-space-between">
        {/* <div className="artist-view-container container"> */}
        {this.props.artists && this.renderArtists()}
        {/* </div> */}
      </div>
    );
  }
}

ArtistList.propTypes = {
  artists: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  getArtistSongs: PropTypes.func,
  getPopularArtists: PropTypes.func,
  getArtistAlbums: PropTypes.func,
  getArtistsError: PropTypes.bool,
  getArtistsPending: PropTypes.bool,
  token: PropTypes.string,
  updateTitle: PropTypes.func
};

export default ArtistList;
