const defaultState = {
  artistIds: "",
  getArtistsPending: true,
  artists: [],
  albumIds: "",
  viewType: "artists"
};

export const artistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ARTIST_IDS":
      return {
        ...state,
        artistIds: action.artistIds
      };
    
    case "ARTISTS_PENDING":
      return {
        ...state,
        getArtistsPending: true,
      };

    case "ARTISTS_SUCCESS":
      return {
        ...state,
        artists: action.artists,
        albumIds: "",
        getArtistsError: false,
        getArtistsPending: false
      };

    case "ARTISTS_ERROR":
      return {
        ...state,
        getArtistsError: true,
        getArtistsPending: false
      };

      case "ARTIST_ALBUMS_PENDING":
      return {
        ...state,
        getArtistsAlbumsPending: true
      };

    case "ARTIST_ALBUMS_SUCCESS":
      return {
        ...state,
        albumIds: action.albumIds,
        getArtistsAlbumsError: false,
        getArtistsAlbumsPending: false,
        viewType: "albums"
      };

    case "ARTIST_ALBUMS_ERROR":
      return {
        ...state,
        getArtistsAlbumsError: true,
        getArtistsAlbumsPending: false
      };

    case "SEARCH_ARTISTS_PENDING":
      return {
        ...state,
        searchArtistsPending: true,
        artists: []
      };

    case "SEARCH_ARTISTS_SUCCESS":
      return {
        ...state,
        artists: action.artists,
        albumIds: "",
        searchArtistsError: false,
        searchArtistsPending: false,
        viewType: "search"
      };

    case "SEARCH_ARTISTS_ERROR":
      return {
        ...state,
        searchArtistsError: true,
        searchArtistsPending: false
      };

    default:
      return state;
  }
};

export default artistReducer;
