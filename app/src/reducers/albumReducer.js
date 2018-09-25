const defaultState = {
  albums: [],
  getAlbumsError: false,
  getAlbumsPending: true,
  visibleList: []
};
const editVisibleSongs = (list, albumId, visible) => {
  return list.map(album => {
      var temp = Object.assign({}, album);
      if (albumId === album.id) {
          temp.visible = visible;
      }
      return temp;
  });
} 
export const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ALBUM_IDS":
      return {
        ...state,
        albumIds: action.albumIds
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
        getAlbumsPending: false
      };

    case "ALBUMS_ERROR":
      return {
        ...state,
        getAlbumsError: true,
        getAlbumsPending: false
      };

    case "ALBUMS_SONGS_PENDING":
      return {
        ...state,
        getAlbumsSongsPending: true,
        visible: false
      };

    case "ALBUMS_SONGS_SUCCESS":
      // Adding new songs list object when necessary
      action.songs.addFlag && state.songs.push(action.songs);
      return {
        ...state,
        songs: editVisibleSongs(state.songs, action.songs.id, action.songs.visible),
        getAlbumsSongsError: false,
        getAlbumsSongsPending: false
      };

    case "ALBUMS_SONGS_ERROR":
      return {
        ...state,
        getAlbumsSongsError: true,
        getAlbumsSongsPending: false
      };
    case "CHANGE_VISIBLE_STATE":
      action.addFlag && state.visibleList.push(action.visibleList);
      return {
        ...state,
        visibleList: editVisibleSongs(state.visibleList, action.visibleList.id, action.visibleList.visible)
        // visibleList: state.visibleList.map(visibleItem => {
        //   console.log("visibleItem");
        //   console.log(visibleItem);
        //   console.log("visibleList in action");
        //   console.log(action.visibleList);
        //   visibleItem.id === action.visibleList.id
        //     ? { ...action.visibleList, visible: action.visibleList.visible }
        //     : visibleItem;
        // })
      };
    default:
      return state;
  }
};

export default albumsReducer;
