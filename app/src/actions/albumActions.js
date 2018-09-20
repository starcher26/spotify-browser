export const initializeAlbumsList = () => {
  return {
    type: "INITIALIZE_ALBUMS_LIST"
  };
};
export const getAlbumsPending = () => {
  return {
    type: "ALBUMS_PENDING"
  };
};

export const getAlbumsSuccess = albums => {
  return {
    type: "ALBUMS_SUCCESS",
    albums
  };
};

export const getAlbumsError = () => {
  return {
    type: "ALBUMS_ERROR"
  };
};

export const getAlbums = (albumIds, accessToken) => {
  return dispatch => {
    // console.log('dispatch');
    const request = new Request(
      `https://api.spotify.com/v1/albums/?ids=${albumIds}`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
    dispatch(getAlbumsPending());
    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        res.albums = res.albums.map(item => {
          return {
            album: item
          };
        });
        dispatch(getAlbumsSuccess(res.albums));
      })
      .catch(err => {
        dispatch(getAlbumsError(err));
      });
  };
};

export const getAlbumsSongsPending = () => {
  return {
    type: "ALBUMS_SONGS_PENDING"
  };
};

export const getAlbumsSongsSuccess = albums => {
  return {
    type: "ALBUMS_SONGS_SUCCESS",
    albums
  };
};

export const getAlbumsSongsError = () => {
  return {
    type: "ALBUMS_SONGS_ERROR"
  };
};

export const getAlbumSongs = (albumId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/albums/${albumId}/tracks `,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );

    dispatch(getAlbumsSongsPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(getAlbumsSongsSuccess(res.items));
      })
      .catch(err => {
        dispatch(getAlbumsSongsError(err));
      });
  };
};

export const setAlbumIds = albumIds => {
  return {
    type: "SET_ALBUM_IDS",
    albumIds
  };
};
