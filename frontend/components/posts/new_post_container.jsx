import NewPost from "./new_post";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NewPost)
);

