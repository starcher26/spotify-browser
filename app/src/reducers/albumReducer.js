const defaultState = {
  albums: [],
  getAlbumsError: false,
  getAlbumsPending: true,
  inspectSongsIcon: "fas fa-plus",
  inspectSongsLabel: "Inspect songs",
  songs: [],
  visibleList: []
};
const editVisibleSongs = (songs, id, visible) => {
  return songs.map(song => {
      var temp = Object.assign({}, song);
      if (id === song.id) {
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
      console.log("reducer");
      console.log(action.songs);
      console.log('state songs');
      console.log(state.songs);
      // console.log(state.songs.map(song => {
      //   return song.id === action.songs.id
      //     ? (song.visible = action.songs.visible)
      //     : song;
      // }));
      action.songs.addFlag && state.songs.push(action.songs);
      return {
        ...state,
        songs: editVisibleSongs(state.songs, action.songs.id, action.songs.visible),
        // songs: state.songs.push(action.songs),
        // songs: action.songs,
        getAlbumsSongsError: false,
        getAlbumsSongsPending: false
      };

    case "ALBUMS_SONGS_ERROR":
      return {
        ...state,
        getAlbumsSongsError: true,
        getAlbumsSongsPending: false
      };
    // case "CHANGE_VISIBLE_STATE":
    //   console.log(state.visibleList);
      
    //   console.log(state.visibleList);
    //   action.addFlag && state.visibleList.push(action.visibleList);
    //   return {
    //     ...state,
    //     visibleList: state.visibleList.map(visibleItem => {
    //       return visibleItem.id === action.visibleList.id
    //         ? (visibleItem.visible = action.visibleList.visible)
    //         : visibleItem;
    //     })
    //     // visibleList: state.visibleList.map(visibleItem => {
    //     //   console.log("visibleItem");
    //     //   console.log(visibleItem);
    //     //   console.log("visibleList in action");
    //     //   console.log(action.visibleList);
    //     //   visibleItem.id === action.visibleList.id
    //     //     ? { ...action.visibleList, visible: action.visibleList.visible }
    //     //     : visibleItem;
    //     // })
    //   };
    default:
      return state;
  }
};

export default albumsReducer;
