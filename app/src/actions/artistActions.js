import uniqBy from 'lodash/uniqBy';
import { setAlbumIds } from './albumActions';
import { getAlbumsPending } from './albumActions';
// while searching for artist
export const getArtistsPending = () => {
  return {
    type: "ARTISTS_PENDING"
  };
};

// sucess
export const getArtistsSuccess = artists => {
  return {
    type: "ARTISTS_SUCCESS",
    artists
  };
};

// error
export const getArtistsError = () => {
  return {
    type: "ARTISTS_ERROR"
  };
};

// get artists
export const getArtists = (accessToken, artistIds) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/artists`, {
      headers: new Headers({
        Authorization: "Bearer " + accessToken
      })
    });

    dispatch(getArtistsPending());

    fetch(request)
      .then(res => {
        return res.json();
      })
      .then(res => {
        dispatch(getArtistsSuccess(res));
      })
      .catch(err => {
        dispatch(getArtistsError(err));
      });
  };
};

//getPopularArtists
export const getPopularArtists = accessToken => {
  // console.log(artistIds);
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=year:2018&type=artist&limit=12`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );

    dispatch(getArtistsPending());

    fetch(request)
      .then(res => {
        if (res.statusText === "Unauthorized") {
          window.location.href = "./";
        }
        return res.json();
      })
      .then(res => {
        res.items = res.artists.items.map(item => {
          return {
            artist: item
          };
        });
        // console.log(res.items);
        dispatch(getAlbumsPending());
        dispatch(getArtistsSuccess(res.items));
      })
      .catch(err => {
        dispatch(getArtistsError(err));
      });
  };
};

// pending state while geting albums of an artist
export const getArtistAlbumsPending = () => {
  return {
    type: "ARTIST_ALBUMS_PENDING"
  };
};

// getting artist albums => success
export const getArtistAlbumsSuccess = (albumIds) => {
  return {
    type: "ARTIST_ALBUMS_SUCCESS",
    viewType: "albums",
    albumIds: albumIds
  };
};

// getting artist albums => error
export const getArtistAlbumsError = () => {
  return {
    type: "ARTIST_ALBUMS_ERROR"
  };
};

// retrieve artist albums
export const getArtistAlbums = (artistId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );
    dispatch(getArtistAlbumsPending());

    fetch(request)
      .then(res => {
        if (res.statusText === "Unauthorized") {
          window.location.href = "./";
        }
        return res.json();
      })
      .then(res => {
        // map the response to match that returned from get song request
        // console.log(res);
        
        // let albumIds = res.items.map(item => {
        //   return item.id;
        // });
        let albumIds = uniqBy(res.items, (item) => {
          return item.name;
        }).map(item => {
          return item.id;
        }).join(',');
        // console.log(albumIds);
        setAlbumIds(albumIds);
        dispatch(getAlbumsPending()); // Put the albums list state to pending
        dispatch(getArtistAlbumsSuccess(albumIds));
      })
      .catch(err => {
        dispatch(getArtistAlbumsError(err));
      });
  };
};

export const searchArtistsPending = () => {
  return {
    type: "SEARCH_ARTISTS_PENDING"
  };
};

export const searchArtistsSuccess = artists => {
  return {
    type: "SEARCH_ARTISTS_SUCCESS",
    artists
  };
};

export const searchArtistsError = () => {
  return {
    type: "SEARCH_ARTISTS_ERROR"
  };
};

export const searchArtists = (searchTerm, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken,
          Accept: "application/json"
        })
      }
    );

    dispatch(searchArtistsPending());

    fetch(request)
      .then(res => {
        if (res.statusText === "Unauthorized") {
          window.location.href = "./";
        }
        return res.json();
      })
      .then(res => {
        res.items = res.artists.items.map(item => {
          return {
            artist: item
          };
        });
        dispatch(searchArtistsSuccess(res.items));
      })
      .catch(err => {
        dispatch(searchArtistsError(err));
      });
  };
};

export const setArtistIds = artistIds => {
  return {
    type: "SET_ARTIST_IDS",
    artistIds
  };
};
