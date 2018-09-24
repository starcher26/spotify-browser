import SongList from "./SongList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    // albumSongs: state.albumReducer.albumSongs ? state.albumReducer.albumSongs : ''
  };

};

// const mapDispatchToProps = (dispatch) => {

//   return bindActionCreators({

//   }, dispatch);

// };

export default connect(mapStateToProps, null)(SongList);