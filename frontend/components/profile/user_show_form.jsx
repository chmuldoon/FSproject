
import React, { Component } from 'react'



class UserShowForm extends Component {
  constructor(props){
    super(props)

  }
  
  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  }
  render() {
 
    return (
      <div className="userShow">

        <header className="personal">
          <div className="profilePic">
            {/* profile ;ic */}
          </div>
        <div className="notPicture">
          <div className="profileInfo">
              <p className="name">{this.props.profile.username}</p>
            <button className="profileEdit">Edit Profile</button>

            <button onClick={this.handleLogout.bind(this)}>Log out</button>
          </div>
          
          <div className="profileStats">
            <p>  posts </p>
            <p> 0 followers </p>
            <p> 0 following </p>
          </div>

          <div className="profileBio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure, ea doloremque accusantium maxime temporibus </p>
          </div>

        </div>
        </header>


        
      </div>
    )
  }
}

export default UserShowForm;
