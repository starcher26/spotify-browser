import React, { Component } from "react";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
import Moment from "moment";
import "./AlbumList.css";

import SongList from "../SongList";

class AlbumList extends Component {
  componentWillReceiveProps(nextProps) {
    // Get albums
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
      const handleToggle = (albumId, token) => {
        let albumSongs = {};
        // Filter all albums' songs list on album id
        albumSongs = this.props.songs
          ? this.props.songs.filter(function(song) {
              return song.id === albumId;
            })
          : {};
        // Change visible flag for a song list.
        let visible =
          albumSongs && albumSongs[0] !== undefined
            ? albumSongs[0].visible
            : false;
        // do we have to add this new object to songlist state ?
        let addFlag = albumSongs && albumSongs[0] !== undefined ? false : true;
        this.props.getAlbumSongs(albumId, token, albumSongs, addFlag, !visible);
      };
      // We only get state of the list song of the current album
      let albumSongs = this.props.songs
        ? this.props.songs.filter(function(song) {
            return song.id === album.album.id;
          })
        : {};
      return (
        <div
          className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
          key={i}
          onClick={() => {
            handleToggle(album.album.id, this.props.token);
          }}
        >
          <div className="album-item">
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
              <div className="row justify-space-between align-items-center">
                <div className="col-9">
                  <div className="album-popularity">
                    <StarRatings
                      rating={album.album.popularity / 20}
                      starDimension="20px"
                      starSpacing="5px"
                      starRatedColor="yellow"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="album-date">
                    {Moment(album.album.release_date).format("Y")}
                  </div>
                </div>
              </div>
              <div className="inspect-song">
                <button className="btn btn-primary" type="button">
                  <span className="inspect-icon">
                    <i
                      className={
                        albumSongs[0] && albumSongs[0].visible
                          ? "fas fa-minus"
                          : "fas fa-plus"
                      }
                    />
                  </span>
                  <span className="inspect-label">
                    {albumSongs[0] && albumSongs[0].visible
                      ? "Hide songs"
                      : "Inspect songs"}
                  </span>
                </button>
              </div>
              <div className="songs-list">
                <SongList
                  songs={albumSongs[0] && albumSongs[0].songs}
                  show={albumSongs[0] && albumSongs[0].visible ? "" : "hidden"}
                />
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
        {this.props.albums && this.renderAlbums()}
      </div>
    );
  }
}

AlbumList.propTypes = {
  albums: PropTypes.array,
  songs: PropTypes.array,
//   visible: PropTypes.array,
  getAlbums: PropTypes.func,
  getAlbumSongs: PropTypes.func,
//   changeVisible: PropTypes.func,
  token: PropTypes.string
};

export default AlbumList;
