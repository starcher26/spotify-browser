import AlbumList from "./AlbumList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAlbums, getAlbumSongs, getAlbumsSongsVisibility, changeVisible } from "../../actions/albumActions";
import { updateTitle } from "../../actions/uiActions";

const mapStateToProps = state => {
//   console.log(state.albumReducer.inspectSongsIcon);
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : "",
    albums: state.albumReducer.albums ? state.albumReducer.albums : "",
    albumIds: state.artistReducer.albumIds ? state.artistReducer.albumIds : "",
    getAlbumsError: state.albumReducer.getAlbumsError,
    getAlbumsPending: state.albumReducer.getAlbumsPending,
    visibleList: state.albumReducer.visibleList,
    songs: state.albumReducer.songs,
    inspectSongsIcon: state.albumReducer.inspectSongsIcon,
    inspectSongsLabel: state.albumReducer.inspectSongsLabel,
    viewType: state.uiReducer.viewType
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //   getPopularArtists,
      getAlbums,
      getAlbumSongs,
      getAlbumsSongsVisibility,
      changeVisible,
      updateTitle
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
