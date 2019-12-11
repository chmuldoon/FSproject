import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SideSplash from './side_splash';
const mapStateToProps = (state) => {
  // debugger
  let users = state.entities.users;
  let currentUser = users[state.session.id];
  // let favorites = users.filter(user => currentUser.favorites.includes(user.id))

  return {
    currentUser,
    users,
    // favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideSplash);