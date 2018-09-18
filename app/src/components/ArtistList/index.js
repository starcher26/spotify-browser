import ArtistList from "./ArtistList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPopularArtists, getArtistAlbums } from "../../actions/artistActions";
import { updateTitle } from "../../actions/uiActions";

const mapStateToProps = state => {
  // console.log('reducer');
  // console.log(state.artistReducer.artists);
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : "",
    artists: state.artistReducer.artists ? state.artistReducer.artists : "",
    getArtistsError: state.artistReducer.getArtistsError,
    getArtistsPending: state.artistReducer.getArtistsPending,
    viewType: state.artistReducer.viewType,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getPopularArtists,
      getArtistAlbums,
      updateTitle
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistList);
