import ArtistList from "./ArtistList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPopularArtists,
  getArtistAlbums
} from "../../actions/artistActions";
import { updateTitle, updateViewType } from "../../actions/uiActions";

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : "",
    artists: state.artistReducer.artists ? state.artistReducer.artists : "",
    getArtistsError: state.artistReducer.getArtistsError,
    getArtistsPending: state.artistReducer.getArtistsPending,
    viewType: state.uiReducer.viewType
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPopularArtists,
      getArtistAlbums,
      updateTitle,
      updateViewType
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistList);
