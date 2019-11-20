
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FollowContainer from '../follows/follow_container';
// import PostShowContainer from '../posts/post_show_container';

class UserShowForm extends Component {
  constructor(props){
    
    super(props)
    // debugger
    // this.props.profile.passive_follows.filter(follow => follow.follower_id === this.props.currentUser.id).id
    // this.handlePostShow = this.handlePostShow.bind(this);
  }
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      // this.fetchPost(this.props.post.id)
    }
  }


  componentDidMount() {
    // this.props.fetchUsers();
    this.props.fetchUsers();
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAllFollows();
    this.props.fetchPosts();
    this.props.fetchAllComments();
  
  };

  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  };
  
  
  render() {
    if (!this.props.profile) {
      return [];
    }
    //lets work on this
    // debugger
    let logStatus;
 
    let display;
  
    if (this.props.profile.posts === undefined){
      display = (
        <div>
          <p>no posts</p>
        </div>
      )
    }else{
      // debugger
      display = (
        this.props.profilePosts.reverse().map(post => {
          // debugger
          return (
            <div className="post-preview">
              {/* <Link className="profile-post-link" to={`/posts/${post.id}`}>
            </Link> */}
              <div
                className="profile-post-link"
              >
                <div className="Overlay" id="profile" onClick={() => this.props.openShowModal("postShow", post)}>
                  <p style={{ zIndex: 8 }}>
                    {post.likeCount} <i className="fas fa-heart" />   
                    {post.comments.length }{"  "}  <i className="fas fa-comment"></i>
                  </p>
                </div>
                <img
                  onClick={() => this.props.openShowModal("postShow", post)}
                  width="275px"
                  height="275px"
                  src={post.photoUrl}
                />
              </div>
              {/* <div
                className="profile-post-link"
                onClick={this.handlePostShow(post.id)}
              >
              </div> */}
            </div>
          );
        })
      )
    }

      
    
    // debugger
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

              <FollowContainer
                users={this.props.users}
                user={this.props.profile}
                userId={this.props.profile.id}
                follows={this.props.follows}
              />
              <div className="profileStats">
                {this.props.profile.posts === undefined ? (
                  <div className="Stat">
                    <p className="profileBioDetail">0 </p>
                    <p>posts</p>
                  </div>
                ) : (
                  <div className="Stat">
                    <p className="profileBioDetail">
                      {this.props.profilePosts.length}{" "}
                    </p>
                    <p className="StatWord">posts</p>
                  </div>
                )}
                <div className="Stat">
                  <p className="profileBioDetail">
                    {this.props.profile.passive_follows.length}
                  </p>
                  <p className="StatWord"> followers</p>
                </div>
                <div className="Stat">
                  <p className="profileBioDetail">
                    {this.props.profile.active_follows.length}{" "}
                  </p>
                  <p> following</p>
                </div>
              </div>
            </div>

            <div className="profileBio">
              <p className="profileBioDetail">{this.props.profile.full_name}</p>
              <div className="profileBioCaption">
                <p>{this.props.profile.bio}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="profile-posts-div">
          <div className="profile-posts">{display}</div>
        </div>
        <div className="semi-modal-test"></div>
      </div>
    );
  }
};

export default UserShowForm;
