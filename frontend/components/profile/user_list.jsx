import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import Logout from "./logout";
import { closeModal, openModal } from "../../actions/modal_actions";

import React, { Component } from 'react'

export class UserList extends Component {
  constructor(props){
    super(props)
  }
  hasFollowed(user) {
    let activeFollowsIds = this.props.currentUser.active_follows
      .map(userr => userr.id)
    if (activeFollowsIds.includes(user)){
      return(
        <div>
          Followed
        </div>
      )
    }
  }
  render() {
    debugger
    let users = this.props.list.map(user => {
      return (
        <div className="UserListItem">
          <Link className="ListLink" to={`/users/${user.id}`}>
            <img className="UserListPhoto" src={user.photoUrl} />

            <div className="UsernameAndName">
              <div className="UserListUsername">{user.username}</div>
              <div className="UserListName">{user.full_name}</div>
            </div>

            {this.hasFollowed(user)}
          </Link>
        </div>
      );
    });
    return (
      <div className="UserList">
        <div className="ListKind">
          <h1>{this.props.listKind}</h1>
        </div>
        
        <div className="ListSection">
          {users}
        </div>
      </div>
    )
  }
}




const mapStateToProps = (state, ownProps) => {
  const listIds = ownProps.list.map(user => user.id);
  const users = Object.values(state.entities.users)
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
    list: users.filter(user => listIds.includes(user.id)),
    listKind: ownProps.kind
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
