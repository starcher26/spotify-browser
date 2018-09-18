import Search from "./Search";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchArtists } from '../../actions/artistActions';
import { updateTitle } from "../../actions/uiActions";

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    searchArtists,
    updateTitle
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Search);