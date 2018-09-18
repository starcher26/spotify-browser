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
    const request = new Request(
      `https://api.spotify.com/v1/artists/${artistIds}`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );

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

// pending state while geting a songs of an artist
export const getArtistSongsPending = () => {
  return {
    type: "ARTIST_SONGS_PENDING"
  };
};

// getting artist songs => success
export const getArtistSongsSuccess = songs => {
  return {
    type: "ARTIST_SONGS_SUCCESS",
    songs
  };
};

// getting artist songs => error
export const getArtistSongsError = () => {
  return {
    type: "ARTIST_SONGS_ERROR"
  };
};

// retrieve artist songs
export const getArtistSongs = (artistId, accessToken) => {
  return dispatch => {
    const request = new Request(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=CA`,
      {
        headers: new Headers({
          Authorization: "Bearer " + accessToken
        })
      }
    );

    dispatch(getArtistSongsPending());

    fetch(request)
      .then(res => {
        if (res.statusText === "Unauthorized") {
          window.location.href = "./";
        }
        return res.json();
      })
      .then(res => {
        // map the response to match that returned from get song request
        res.items = res.tracks.map(item => {
          return {
            track: item
          };
        });

        dispatch(getArtistSongsSuccess(res.items));
      })
      .catch(err => {
        dispatch(getArtistSongsError(err));
      });
  };
};

export const setArtistIds = artistIds => {
  return {
    type: "SET_ARTIST_IDS",
    artistIds
  };
};
