import React, { Component } from 'react'
import NewPostContainer from '../posts/new_post_container'
import { Link } from "react-router-dom";

export class SideSplash extends Component {
  constructor(props){
    super(props)
  }
  findSuggestions(){
    if (!this.props.users || Object.values(this.props.users).length < 2) {
      return null;
    }
    let {users, currentUser} = this.props;
    let suggestions = []
    let count = {}
    let active_follows = currentUser.active_follows.map(a => a.target_id)
    currentUser.active_follows.forEach(follow => {
      const sug = (users[follow.target_id].active_follows.map(a => a.target_id))
      suggestions = suggestions.concat(sug)
    })

    suggestions.forEach(sug =>{
      if (sug !== currentUser.id && !active_follows.includes(sug)){
        if (count[sug]) {
          count[sug] += 1;
        } else {
          count[sug] = 1;
        }
      }
    })
    let sorted = Object.keys(count).sort(function(a, b) {
      return count[a] - count[b];
    }).reverse().map(a => parseInt(a))
    // debugger
    return sorted

  }
  renderBox(ids, title, bool){
    if (!this.props.users || Object.values(this.props.users).length < 2) {
      return null;
    }
    let {users} = this.props
    return (
      <div className="favBox">
        <div className="favBoxTitle">
          <h1>{title}</h1>
        </div>
        <div className="favList">
          {ids.map(id => {
            let user = users[id];
            // debugger
            return (
              <div className="ListLink">
                <Link to={`users/${id}`} className="ListLink">
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                    className="UserListPhoto"
                    src={user.photoUrl}
                  />
                  <div className="UsernameAndName">
                    <div className="UserListUsername">{user.username}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  renderSuggestions(){
    if (!this.props.users || Object.values(this.props.users).length < 2) {
      return null;
    }
    let { users, currentUser } = this.props;
    let suggestions = this.findSuggestions();


  
  }
  render() {
    const {currentUser} = this.props
    return (
      <div className="sideOfIndex">
        <div className="Space">
          <img className="SideIndexFace" src={currentUser.photoUrl} />
          <div className="SideIndexNames">
            <Link className="SideUsername" to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
            {currentUser.full_name ?
              <p>{currentUser.full_name}</p> :
              <p></p>
            }
          </div>
        </div>
        {this.renderBox(currentUser.favorites, "Favorites", true)}
        {this.renderBox(this.findSuggestions(), "Suggestions For You", true)}
      </div>
    )
  }
}

export default SideSplash
