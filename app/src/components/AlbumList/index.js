import AlbumList from "./AlbumList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAlbums, getAlbumSongs } from "../../actions/albumActions";
import { updateTitle } from "../../actions/uiActions";

const mapStateToProps = state => {
//   console.log(state.albumReducer.inspectSongsIcon);
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : "",
    albums: state.albumReducer.albums ? state.albumReducer.albums : "",
    albumIds: state.artistReducer.albumIds ? state.artistReducer.albumIds : "",
    getAlbumsError: state.albumReducer.getAlbumsError,
    getAlbumsPending: state.albumReducer.getAlbumsPending,
    // visibleList: state.albumReducer.visibleList,
    songs: state.albumReducer.songs,
    viewType: state.uiReducer.viewType
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      //   getPopularArtists,
      getAlbums,
      getAlbumSongs,
      updateTitle
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);
