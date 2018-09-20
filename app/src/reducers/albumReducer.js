const defaultState = {
  albums: [],
  getAlbumsError: false,
  getAlbumsPending: true,
};

export const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ALBUM_IDS":
      return {
        ...state,
        albumIds: action.albumIds,
      };
    case "ALBUMS_PENDING":
      return {
        ...state,
        getAlbumsPending: true
      };
    case "INITIALIZE_ALBUMS_LIST":
      return {
        ...state,
        albums: []
      };
    case "ALBUMS_SUCCESS":
      return {
        ...state,
        albums: action.albums,
        getAlbumsError: false,
        getAlbumsPending: false,
      };

    case "ALBUMS_ERROR":
      return {
        ...state,
        getAlbumsError: true,
        getAlbumsPending: false,
      };

    case "ALBUMS_SONGS_PENDING":
      return {
        ...state,
        getAlbumsSongsPending: true
      };

    case "ALBUMS_SONGS_SUCCESS":
      return {
        ...state,
        songs: action.songs,
        getAlbumsSongsError: false,
        getAlbumsSongsPending: false
      };

    case "ALBUMS_SONGS_ERROR":
      return {
        ...state,
        getAlbumsSongsError: true,
        getAlbumsSongsPending: false
      };

    default:
      return state;
  }
};

export default albumsReducer;
