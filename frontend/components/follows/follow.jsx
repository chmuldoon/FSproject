import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    // debugger
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);


  }

  follow(e) {
    e.preventDefault();
    // debugger
    this.props.createFollow({target_id: this.props.user.id})
  }
  unfollow(e) {
    e.preventDefault();
    debugger
    this.props.deleteFollow(this.props.user.id)
  }
  render() {
    let {user} = this.props
    let follow;

    follow = 
      this.props.user.passive_follows.filter(
        follower => follower.follower_id === this.props.currentUser.id
      ).length === 0 ? (
        <div>
          <button className="followButton" onClick={this.follow}>follow</button>
        </div>
      ) : (
        <div>
          <button className="followButton" onClick={this.unfollow}>unfollow</button>
        </div>
      );
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
