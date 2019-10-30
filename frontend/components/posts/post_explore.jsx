import React, { Component } from 'react'
import PostExplorePost from './post_explore_post';

export class PostExplore extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }
  render() {
    const posts = this.props.posts.map(post => {
      return (
        <PostExplorePost
          key={post.id}
          post={post}
          // createLike={this.props.createLike}
          // deleteLike={this.props.deleteLike}
          // createComment={this.props.createComment}
          // deleteComment={this.props.deleteComment}
        />
      );
    });
    return (
      <div>
        <title>Explore!</title>
        <div className="Explore-Whole">
          {/* <p>Explore</p> */}
          
          {posts}
        </div>
      </div>
    )
  }
}

export default PostExplore
