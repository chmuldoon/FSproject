import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    this.fetchFollow = this.fetchFollow.bind(this);
    this.following = this.following.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // debugger
    // this.follow = this.follow.bind(this);
    // this.unfollow = this.unfollow.bind(this);


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

  handleClick() {
    const follow = {
      follower_id: this.props.currentUserId,
      target_id: this.props.userId,
    };

    if (this.following(follow.target_id)) {
      const followId = this.fetchFollow(follow.target_id);
      this.props.deleteFollow(followId);
      this.props.user.passive_follows
      this.forceUpdate()
    } else {
      this.props.createFollow(follow);
      this.forceUpdate()
    }
    debugger
    this.forceUpdate()
  }

  render() {
    debugger
    let follow;
    let {user, userId, currentUserId} = this.props
    let following = this.following(userId)

    follow = 
      following ? (
        <div>
          {/* <button>{this.props.follows.length}</button> */}
        <button className="followButton" onClick={this.handleClick.bind(this)}>unfollow</button>
        </div>
      ) : (
        <div>
          <button className="followButton" onClick={this.handleClick.bind(this)}>follow</button>
        </div>
      );
      if (userId === currentUserId) {
        follow = (
          <button onClick={this.handleLogout.bind(this)}>Log out</button>
        );
      } 
      return (
        <div>
          {follow}
          <div className="profileStats">
            {this.props.user.posts === undefined ? (
              <div className="Stat">
                <p className="profileBioDetail">0 </p>
                <p>posts</p>
              </div>
            ) : (
                <div className="Stat">
                  <p className="profileBioDetail">
                    {Object.keys(this.props.user.posts).length}{" "}
                  </p>
                  <p className="StatWord">posts</p>
                </div>
              )}
            <div className="Stat">
              <p className="profileBioDetail">
                {this.props.user.passive_follows.length}
              </p>
              <p className="StatWord"> followers</p>
            </div>
            <div className="Stat">
              <p className="profileBioDetail">
                {this.props.user.active_follows.length}{" "}
              </p>
              <p> following</p>
            </div>
          </div>
        </div>
      );
  }
}

export default Follow
