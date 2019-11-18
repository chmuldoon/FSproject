
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserPatch from "./user_patch";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../util/user_api_util";


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserPatch)
);
