import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import './Content.css';

const Content = ({ viewType }) => {

  return (
    <div>
      {
        viewType === 'artists' ? // If view => artists, display artistsList
          (<ArtistList />) :
          viewType === 'search' ? // If view => search, display artistsList
            (<ArtistList />) :
            (<AlbumList />) // else view = albums, display albumsList
      }
    </div>
  );

};

Content.propTypes = {
  viewType: PropTypes.string,
};

export default Content;