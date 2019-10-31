
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UserShowForm extends Component {
  constructor(props){
    
    super(props)
    debugger
    // this.props.profile.passive_follows.filter(follow => follow.follower_id === this.props.currentUser.id).id
    
  }
  handleFollow(e) {
    // e.preventDefault();

    if (this.props.profile.hasFollowed) {
      debugger
      this.props.deleteFollow(this.props.profile.id)
    } else {
      this.props.createFollow(this.props.profile.id)
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
    this.props.fetchFollows();
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  };
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  
  render() {
    if (!this.props.profile) {
      return null;
    }
    //lets work on this
    let logStatus;
    if (this.props.profile.id === this.props.currentUser.id) {

      logStatus = (
      <div>
        <button className="profileEdit">Edit Profile</button>
        <button onClick={this.handleLogout.bind(this)}>
          Log out
        </button>
      </div>
      )
    } else {
      logStatus = (
        
      <div>
      </div>
      )
    }
 
    let display;
  
    if (this.props.profile.posts === undefined){
      display = (
        <div>
          <p>no posts</p>
        </div>
      )
    }else{
      
      display = (
        this.props.profile.posts && Object.values(this.props.profile.posts).map(post => {
          return (
              // <div className="post-preview">
                <Link className="profile-post-link" to={`/posts/${post.id}`}>
                  <img width="275px" height="275px" src={post.photo} />
                </Link>
              // </div>
          );
        })
      )
    }

      
    

    return (
      <div className="userShow">
        {this.props.profile.full_name ? (
          <title>
            {this.props.profile.full_name}
            {` (@${this.props.profile.username}) • Clonestagram Profile`}{" "}
          </title>
        ) : (
          <title>
            {`(@${this.props.profile.username}) • Clonestagram Profile`}{" "}
          </title>
        )}
        <header className="personal">
          <div className="profilePicArea">
            <div className="profilePic">
              <img src={this.props.profile.photoUrl} />
            </div>
          </div>

          <div className="notPicture">
            <div className="profileInfo">
              <p className="name">{this.props.profile.username}</p>
              {this.props.currentUser.id === this.props.profile.id ? (
                <div>{logStatus}</div>
              ) : (
                <div className="follow-Button">
                  {this.props.profile.hasFollowed ? (
                    <div className="buttonUser">
                      <button onClick={this.handleFollow.bind(this)}>
                        Following
                      </button>
                      {logStatus}
                      {/* <button onClick={this.handleLogout.bind(this)}>Log out</button> */}
                      {/* <svg className='profile-show-follow' onClick={this.handleFollow.bind(this)} className="heart-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> */}
                    </div>
                  ) : (
                    <div className="buttonUser">
                      <button onClick={this.handleFollow.bind(this)}>
                        Follow
                      </button>
                      {logStatus}
                      {/* <button onClick={this.handleLogout.bind(this)}>Log out</button> */}
                      {/* <svg className='profile-show-follow' onClick={this.handleFollow.bind(this)} className="heart-empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> */}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="profileStats">
              {this.props.profile.posts === undefined ? (
                <div className="Stat">
                  <p className="profileBioDetail">0 </p>
                  <p>posts</p>
                </div>
              ) : (
                <div className="Stat">
                  <p className="profileBioDetail">
                    {Object.keys(this.props.profile.posts).length}{" "}
                  </p>
                  <p className="StatWord">posts</p>
                </div>
              )}
              <div className="Stat">
                <p className="profileBioDetail">
                  {this.props.profile.followers.length}{" "}
                </p>
                <p className="StatWord"> followers</p>
              </div>
              <div className="Stat">
                <p className="profileBioDetail">
                  {this.props.profile.followings.length}{" "}
                </p>
                <p> following</p>
              </div>
            </div>

            <div className="profileBio">
              <p className="profileBioDetail">{this.props.profile.full_name}</p>
              <div className="profileBioCaption">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  iure, ea doloremque accusantium maxime temporibus{" "}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="profile-posts-div">
          <div className="profile-posts">{display}</div>
        </div>
      </div>
    );
  }
};

export default UserShowForm;
