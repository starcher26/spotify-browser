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

export const getAlbumsSongsSuccess = songs => {
  return {
    type: "ALBUMS_SONGS_SUCCESS",
    songs
  };
};

export const getAlbumsSongsError = () => {
  return {
    type: "ALBUMS_SONGS_ERROR"
  };
};

export const getAlbumsSongsVisibility = (albumId, show) => {
  return {
    type: "ALBUMS_SONGS_VISIBLE",
    visibility: {
      id: albumId,
      show: show
    }
  };
};
export function changeVisible(albumId, addFlag, visible) {
  return {
    type: "CHANGE_VISIBLE_STATE",
    addFlag,
    visibleList: {
      id: albumId,
      visible: visible
    }
  };
}
export const getAlbumSongs = (
  albumId,
  accessToken,
  songs,
  addFlag,
  visible
) => {
  return dispatch => {
    if (songs && songs[0] !== undefined) {
      let albumSongs = {
        id: albumId,
        songs: songs[0].songs,
        visible: visible,
        addFlag: addFlag
      };
      dispatch(getAlbumsSongsSuccess(albumSongs));
    } else {
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
          let songs = res.items.map(item => {
            return {
              song: item
            };
          });

          res.items = {
            id: albumId,
            songs: songs,
            visible: visible,
            addFlag: addFlag
          };
          dispatch(getAlbumsSongsSuccess(res.items));
        })
        .catch(err => {
          dispatch(getAlbumsSongsError(err));
        });
    }
  };
};

export const setAlbumIds = albumIds => {
  return {
    type: "SET_ALBUM_IDS",
    albumIds
  };
};
