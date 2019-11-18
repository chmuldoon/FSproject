
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserPatch from "./user_patch";

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPatch)
);
