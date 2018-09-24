import SongList from "./SongList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
  };

};
export default connect(mapStateToProps, null)(SongList);