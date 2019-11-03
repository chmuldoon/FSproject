import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }
  componentDidUpdate() {
    this.props.fetchPosts();

  }

  render() {
    // debugger
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          fetchPosts={this.props.fetchPosts}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          createComment={this.props.createComment}
          deleteComment={this.props.deleteComment}
        />
      );
      });

    return (
      <div>
        <title>Clonestagram</title>
        {posts}
      </div>
    );
  }
}

export default PostIndex;