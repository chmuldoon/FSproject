import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Logout from "./logout";
import { closeModal, openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}



const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));