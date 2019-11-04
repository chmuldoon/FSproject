import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);


  }
  componentDidMount(){
  
    this.props.fetchFollows
  }

  follow(e) {
    this.props.createFollow({follower_id: this.props.follower_id, target_id: this.props.target_id})
  }
  unfollow(e) {
    this.props.deleteFollow(Object.values(this.props.target_follows).filter(follow => follow.follower_id === this.props.currentUser.id && follow.target_id === this.props.targetId));
  }
  render() {
    if (this.props.follow_status) {
      return (
        <div>
          <button onClick={this.unfollow}>unfollow</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.follow}>follow</button>
        </div>
      )
    }
    
  }
}

export default Follow
