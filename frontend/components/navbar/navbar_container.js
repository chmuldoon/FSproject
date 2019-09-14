import { logout } from "../../actions/session_actions";
import { connect } from 'react-redux';
import NavBar from "./navbar";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
