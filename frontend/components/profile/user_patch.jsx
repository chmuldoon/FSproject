import React, { Component } from "react";

export class UserPatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      full_name: this.props.user.full_name,
      email: this.props.user.email,
      bio: this.props.user.bio,
      photoFile: null,
      photoUrl: this.props.user.photoUrl
    };
    for (let key in this.state) {
      if (this.state.hasOwnProperty(key) && this.state[key] === null && key === "photoFile") {
        this.state[key] = '';
      };
    }
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }
  handleFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      });
    };

    if (file) fileReader.readAsDataURL(file);
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    // const profile = Object.assign({}, this.state);
    const formData = new FormData();
    if(this.state.photoFile) {formData.append("user[profilepic]", this.state.photoFile)}
    formData.append("user[full_name]", this.state.full_name)
    formData.append("user[username]", this.state.username);
    formData.append("user[email]", this.state.email); 
    formData.append("user[bio]", this.state.bio); 

    this.props.updateUser({formData, id: this.props.user.id})
    
    .then(() => {
        this.props.history.push(`/users/${this.props.user.id}`)
      }).then(() => {
        this.props.closeModal()
      });


  }

  render() {
    return (
      <div className="EditUserForm">
        <form className="EditUserFormForm" onSubmit={this.handleSubmit}>
          <div className="EditUserFormPhoto">
            <div className="EditUserFormPhotoButton">
              <img className="editPhotoPhoto" src={this.state.photoUrl} />
              <div className="editPhotoPhotoOverlay">
                <p>Change Picture</p>
                <input type="file" onChange={this.handleFile} />
              </div>
            </div>
          </div>
          
          <div className="EditUserFormTitle">
            <h1>Edit Profile</h1>
          </div>
          <div className="EditSection">
            <label className="EditUserFormLabel">Name</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("full_name")}
              value={this.state.full_name}
              // placeholder={this.props.user.full_name}
            />
          </div>
          <div className="EditSection">
            <label className="EditUserFormLabel">Username</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("username")}
              value={this.state.username}
              // placeholder={this.props.user.username}
            />
          </div>
          <div className="BioSection">
            <label className="EditUserFormLabel">Bio</label>
            <textarea
              onChange={this.update("bio")}
              value={this.state.bio}
              // placeholder={this.props.user.bio}
            />
          </div>
          <div className="EditSection">
            <label className="EditUserFormLabel">Email</label>
            <input
              className="EditUserFormFormInput"
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              // placeholder={this.props.user.email}
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
