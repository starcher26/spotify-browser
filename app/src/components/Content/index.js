import Content from "./Content";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    title: state.uiReducer.title,
    viewType: state.uiReducer.viewType
  };
};

export default connect(mapStateToProps)(Content);
