import { connect } from 'react-redux';
import React from 'react';
import UserShowForm  from './user_show_form';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';



const msp = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id]
  let profile = state.entities.users[ownProps.match.params.userId]
  return ({
    currentUser,
    profile
  })

}

const mdp = (dispatch, ownProps) =>({
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
});




export default connect(msp, mdp)(UserShowForm)