import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    this.fetchFollow = this.fetchFollow.bind(this);
    this.following = this.following.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    // this.state = {
    //   followed: null
    // }

    // 
    // this.follow = this.follow.bind(this);
    // this.unfollow = this.unfollow.bind(this);

  
  }
  componentDidUpdate(prevProps, nextProps){
    if(this.props.user.passive_follows !== prevProps.user.passive_follows){
      // this.props.fetchUser(this.props.userId)
    }
  }
  // fetchFollow() {
  //   const followerId = this.props.currentUserId;
  //   const targetId = this.props.userId;

  //   const follow = this.props.follows.find(({ follower_id, target_id }) => follower_id === followerId && target_id === targetId);

  //   return follow
  // }

  // isFollowing() {
  //   return this.fetchFollow() ? true : false;
  // }

  // handleClick() {
  //   const follow = {
  //     follower_id: this.props.currentUserId,
  //     target_id: this.props.userId
  //   }
  //   debugger
  //   if(this.isFollowing(follow.target_id)) {
  //     debugger
  //     const followId = follow.id;
  //     this.props.deleteFollow(followId);
  //   }else{
  //     this.props.createFollow(follow)
  //   }
  // }
  handleLogout(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/'));
  };
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      // this.fetchPost(this.props.post.id)
    }
  }
  fetchFollow(followingId) {
    const follows = Object.values(this.props.follows);

    for (let i = 0; i < follows.length; i++) {
      const match = (follows[i].follower_id === this.props.currentUserId && follows[i].target_id === followingId);
      if (match) {
        return follows[i].id;
      }
    }
  }

  following(followingId) {
    const follows = Object.values(this.props.follows);

    for (let i = 0; i < follows.length; i++) {
      const match = (follows[i].follower_id === this.props.currentUserId && follows[i].target_id === followingId);
      if (match) {
        return true;
      }
    }
    return false;
  }

  // handleClick() {
  //   const follow = {
  //     follower_id: this.props.currentUserId,
  //     target_id: this.props.userId,
  //   };

  //   if (this.following(follow.target_id)) {
  //     const followId = this.fetchFollow(follow.target_id);
  //     this.props.deleteFollow(followId);
 
  //   } else {
  //     this.props.createFollow(follow);
  //   }
    
  // }

  handleFollow(e){
    e.preventDefault();
    const follow = {
      follower_id: this.props.currentUserId,
      target_id: this.props.userId,
    };
    this.props.createFollow(follow);
  }
  handleUnfollow(e){
    e.preventDefault();
    const follow = {
      follower_id: this.props.currentUserId,
      target_id: this.props.userId,
    };
    const followId = this.fetchFollow(follow.target_id);
    this.props.deleteFollow(followId);
  }

  render() {
    if(this.props.user === undefined){
      return [];
    }
    // debugger
    let followButton;
    let {user, userId, currentUserId} = this.props
    followButton =
      this.props.user.passive_follows.filter(
        follower => follower.follower_id === this.props.currentUserId
      ).length === 0
         ? (
        <div>
          <button
            className="followButton"
            onClick={this.handleFollow}
          >
            follow
          </button>
          {/* {profileStats} */}
        </div>
      ) : (
        <div>
          {/* <button>{this.props.follows.length}</button> */}
          <button
            className="followButton"
            onClick={this.handleUnfollow}
          >
            unfollow
          </button>
        </div>
      );

      let currentUserOpt =
        userId === currentUserId ? (
          <div>
            {/* <button onClick={this.handleLogout.bind(this)}>Log out</button> */}
            {/* <button onClick={() => this.props.openModal("upload")}>
              Upload
            </button> */}
            <button onClick={() => this.props.openModal("editProfile")}>
              Edit Profile
            </button>
            <i style={{marginLeft: 15, fontSize: 28}}
              onClick={() => this.props.openModal("logout")}
              className="fas fa-cog">
            </i>
          </div>
        ) : (
          <div></div>
        );

      if (userId !== currentUserId){
        return (
          <div>
            {followButton}
          </div>
        )
      }else{
        return (
          <div>
            {currentUserOpt}
          </div>
        )
      }
  }
}

export default Follow
