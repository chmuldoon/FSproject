import React, { Component } from 'react'

export class Logout extends Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    e.preventDefault();
    this.props.logout()
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div className="logoutBox">
        <div onClick={this.handleLogout}>Log Out</div>
        <div onClick={this.props.closeModal}>Cancel</div>
      </div>
    );
  }
}

export default Logout
