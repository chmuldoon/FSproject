import React, { Component } from "react";

export class UserPatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      full_name: this.props.user.full_name,
      email: this.props.user.email
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.update = this.update.bind(this);

  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[full_name]", this.state.full_name);
    formData.append("user[username]", this.state.username);
    formData.append("user[email]", this.state.email);

    this.props.updateUser(formData)
      .then(() => {
        this.props.history.push(`/users/${this.props.user.id}`)
      }).then(() => {
        this.props.closeModal()
      });

  }

  render() {
    return (
      <div className="EditUserForm">
        <div className="EditUserFormPhoto">
          <img src={this.props.user.photoUrl} />
        </div>

        <div className="EditUserFormTitle">
          <h1>Edit Profile</h1>
        </div>

        <form className="EditUserFormForm" onSubmit={this.handleSubmit}>
          <div className="EditSection">
            <label className="EditUserFormLabel">username</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("username")}
              placeholder={this.props.user.username}
            />
          </div>
          <div className="EditSection">
            <label className="EditUserFormLabel">full name</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("full_name")}
              placeholder={this.props.user.full_name}
            />
          </div>
          <div className="EditSection">
            <label className="EditUserFormLabel">email</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("email")}
              placeholder={this.props.user.email}
            />
          </div>
          <div className="EditSubmit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserPatch;
