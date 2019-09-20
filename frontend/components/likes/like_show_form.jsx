
import React, { Component } from 'react'

export class LikeShowForm extends Component {
  constructor(props){
    super(props);
    this.state = {post: this.props.post}

  }

  createLike() {
    console.log("liked")
    console.log(this)
    debugger
    this.props.createLike({post_id: this.props.post.id, used_id: this.props.currentUserId})
    // .then(() => {
    //   this.props.fetchPost(this.props.post.id).then((action) =>{
    //     console.log(action)
    //     this.setState({post: action.post})
        
    //   })  
    // })
  }

  deleteLike() {

    let { likes, currentUserId, deleteLike } = this.props;
    
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === currentUserId){
        
        deleteLike(likes[i]);
        return;
      }
      
    }

  }

  handleHeart() {
    let {likersId, currentUserId } = this.props;
    console.log(likersId)
    console.log(currentUserId)

    return likersId.includes(currentUserId) ? (
    
      <div className='post-show-like'>
        <svg onClick={this.deleteLike.bind(this)} className="heart-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="red" stroke="red" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </div>
    ):(
      <div className='post-show-like'>
        <svg onClick={this.createLike.bind(this)} className="heart-empty" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-reactid="641"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </div>
    )

  }
  handleLikeCount() {
    
    return (this.state.post.likes.length === 1) ? (
      <div>
        <p>1 like</p>
      
      </div>
    ) : (
      <div>
          <p >{this.state.post.likes.length} likes</p>
      </div>
    )
    
  }
  
  render() {
    
    return ( 
      <div>
        <div>
          {this.handleHeart()}
        </div>

        <div className="likeCount">
          {this.handleLikeCount()}
        </div>
      </div>

      

    );
   
  }
}





export default LikeShowForm