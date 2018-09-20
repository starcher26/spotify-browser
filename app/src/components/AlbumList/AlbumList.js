import React, { Component } from "react";
import PropTypes from "prop-types";
import "./AlbumList.css";

class AlbumList extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== "" &&
      nextProps.albumIds !== "" &&
      !nextProps.getAlbumsError &&
      nextProps.getAlbumsPending &&
      nextProps.viewType === "albums"
    ) {
      this.props.getAlbums(nextProps.albumIds, nextProps.token);
    }
  }
  renderAlbums() {
    return this.props.albums.map((album, i) => {
      const albumAction = (album, token) => {
        this.props.getAlbumSongs(album.id, token);
      };
      return (
        <div
          onClick={() => {
            albumAction(album, this.props.token);
          }}
          className="album-item col-xl-3 col-lg-4 col-md-6 col-sm-12"
          key={i}
        >
          <div className="album-image">
            <img
              className="img-fluid"
              alt="Album Image"
              src={album.album.images[0].url}
            />
          </div>

          <div className="album-details">
            <div className="album-infos">
                <p className="album-name">{album.album.name}</p>
                <p className="album-genre">{album.album.genres.join(", ")}</p>
            </div>
            <div className="row justify-space-between">
              <div className="col">
                <div className="album-popularity">{album.album.popularity}</div>
              </div>
              <div className="col">
                <div className="album-date">{album.album.release_date}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row justify-space-between">{this.renderAlbums()}</div>
    );
  }
}

AlbumList.propTypes = {
  albums: PropTypes.array,
  getAlbums: PropTypes.func,
  token: PropTypes.string
};

export default AlbumList;
