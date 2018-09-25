import React from "react";
import PropTypes from "prop-types";
import "./SongList.css";

const SongList = ({ songs, show }) => {
  const renderSongs = () => {
    return songs.map((song, i) => {
      return (
        <li className="song-item" key={i}>
            {song.name}
        </li>
      );
    });
  };

  return <ul className={`songs-list ${show}`}>{songs && renderSongs()}</ul>;
};

SongList.propTypes = {
  songs: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  show: PropTypes.string,
};

export default SongList;
