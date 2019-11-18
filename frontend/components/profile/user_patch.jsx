import React, { Component } from "react";

export class UserPatch extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.user)
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
    formData.append("user[username]", this.state.username);
    formData.append("user[full_name]", this.state.full_name);
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
      <div className="newPost">
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update("username")}
            placeholder={this.props.user.username}
            // value={this.props.user.username}
          />
          <input
            type="text"
            onChange={this.update("full_name")}
            placeholder={this.props.user.full_name}
            // value={this.props.user.full_name}
          />
          <input
            type="text"
            onChange={this.update("email")}
            placeholder={this.props.user.email}
            // value={this.props.user.email}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UserPatch;
