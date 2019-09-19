
import React, { Component } from 'react'

export class LikeShowForm extends Component {
  constructor(props){
    super(props)
    console.log(props)
    
  }
  handleUnlike(e) {
    e.preventDefault();
      this.props.deleteLike(this.props.post.id).then(() => {
        this.props.fetchPost(this.props.post.id)
      })
  }

  handleLike(e) {
    e.preventDefault();
    this.props.createLike({post_id: this.props.post.id}).then(() => {
      this.props.fetchPost(this.props.post.id)
    })
  }
  
  render() {
    console.log(this.props.post.likers);
    
    return ( 
      <div>
        <div>
          {(this.props.post.likers === undefined || this.props.post.likers.filter(liker => liker.id === this.props.currentUser.id).length === 0) ? 
          (
              <div className="unliked" onClick={this.handleLike.bind(this)}>
                <span>no</span>
              </div>
          ):(
            <div className="liked" onClick={this.handleUnlike.bind(this)}>
              <span>yes</span>
            </div>

          )}
        </div>
        <div className="likeCount">
            <p>{this.props.post.likes.length}</p>
        </div>
      </div>

      

    )
   
  }
}





export default LikeShowForm