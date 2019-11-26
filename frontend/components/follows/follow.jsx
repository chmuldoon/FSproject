import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    this.fetchFollowByTargetId = this.fetchFollowByTargetId.bind(this);
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
      this.props.fetchAllFollows()
    }
  }
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
  fetchFollowByTargetId(targetId) {
    const follows = Object.values(this.props.follows);
    return follows.find(
      follow =>
        follow.follower_id === this.props.currentUserId &&
        follow.target_id === targetId
    );
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
    // debugger
    const followId = this.fetchFollowByTargetId(this.props.userId).id;
    // debugger
    this.props.deleteFollow(followId);
  }

  render() {
    if(this.props.user === undefined){
      return null;
    }
    // debugger
    let followButton;
    let {user, userId, currentUserId} = this.props
    // debugger
    followButton =
      this.props.followss.find(follow => 
        follow.follower_id === currentUserId &&
        follow.target_id === userId)
         ? (
          <button
            className="followButton"
            onClick={this.handleUnfollow}
          >
            unfollow
          </button>
 
      ) : (
          <button
            className="followButton"
            onClick={this.handleFollow}
          >
            follow
          </button>

      );

      if (userId !== currentUserId){
        return <div className="profileButtonArea">{followButton}</div>;
      }else{
        return (
          <div className="profileButtonArea">
            <button onClick={() => this.props.openModal("editProfile")}>
              Edit Profile
            </button>
            <i style={{marginLeft: 15, fontSize: 28}}
              onClick={() => this.props.openModal("logout")}
              className="fas fa-cog">
            </i>
          </div>
        )
      }
  }
}

export default Follow
