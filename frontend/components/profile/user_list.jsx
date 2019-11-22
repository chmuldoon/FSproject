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
  render() {
    // debugger
    let activeFollowsIds = this.props.currentUser.followings.map(
      userr => userr.id
    );

    let users = this.props.list.map(user => {
      // debugger
      return (
        <div className="UserListItem">
          <Link onClick={() => this.props.closeModal()}className="ListLink" to={`/users/${user.id}`}>
            <img className="UserListPhoto" src={user.photoUrl} />

            <div className="UsernameAndName">
              <div className="UserListUsername">{user.username}</div>
              <div className="UserListName">{user.full_name}</div>
            </div>

          </Link>
            {activeFollowsIds.includes(user.id) ? 
            (
              <div className="UserListFollowStatus">
                <p>Following</p>
              </div>
            ):(
              <div></div>
            )}
        </div>
      );
    });
    return (
      <div className="UserList">
        <div className="ListKind">
          <h1>{this.props.listKind}</h1>
          <button className="buttonX" onClick={() => this.props.closeModal()}>
            <svg aria-label="Close" className="UserListX" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
          </button>
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
  // debugger
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
