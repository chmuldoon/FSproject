
import React, { Component } from 'react'



class UserShowForm extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  };
  
  
  render() {
    if (!this.props.profile) {
      return null;
    }
    let logStatus;
    //lets work on this

    if (this.props.profile.userId == this.props.currentUser.id) {
      logStatus = (<div><button className="profileEdit">Edit Profile</button><button onClick={this.handleLogout.bind(this)}>Log out</button></div>)
    } else {
      logStatus = (<div></div>)
    }
 
    let display;
  
    if (Object.keys(this.props.profile.posts).length){
      display = (
        this.props.profile.posts && Object.values(this.props.profile.posts).map(post => {
          return (
            <div key={post.id} className="post-preview" >
          

              <img width="275px" height="275px" src={post.photo} />
            </div>
          )
        })
      )
    }else{
      display = (
        <div>
          <p>no posts</p>
        </div>
      )
    }

      
    

    return (
      <div className="userShow">

        <header className="personal">
        <div className="profilePicArea">
        
            <div className="profilePic">
              <img src={this.props.profile.photoUrl}/>
            </div>
        </div>

        <div className="notPicture">
          <div className="profileInfo">
            <p className="name">{this.props.profile.username}</p>
            <button onClick={this.handleLogout.bind(this)}>Log out</button>
            {logStatus}
    
          </div>
          
          <div className="profileStats">
              <p> {Object.keys(this.props.profile.posts).length} posts </p>
            <p> 0 followers </p>
            <p> 0 following </p>
          </div>

          <div className="profileBio">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure, ea doloremque accusantium maxime temporibus </p>
          </div>

        </div>
        </header>

        <div className="profile-posts-div">
          <div className="profile-posts">
            {display}
          </div>
        </div>


        
      </div>
    )
  }
};

export default UserShowForm;
