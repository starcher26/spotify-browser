import Title from "./Title";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token,
    title: state.uiReducer.title
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(Title);