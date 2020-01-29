import React, { Component } from 'react'

export class Logout extends Component {
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this); 
  }
  handleLogout(e) {
    e.preventDefault();
    // debugger
    this.props.logout()
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/'));
  };
  render() {
    return (
      <div className="logoutBox">
        <div className="logoutBoxDiv" onClick={this.handleLogout}><div>Log Out</div></div>
        <div className="logoutBoxDiv"> <a target="_blank" href="https://github.com/chmuldoon/FSproject">Github</a></div>
        <div className="logoutBoxDiv"><a target="_blank" href="https://www.linkedin.com/in/charlie-muldoon-573180192/"> LinkedIn</a></div>
        <div className="logoutBoxDiv">AngelList</div>
        <div className="logoutBoxDiv cancel" onClick={this.props.closeModal}><div>Cancel</div></div>
      </div>
    );
  }
}

export default Logout
