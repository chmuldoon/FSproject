import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }

  render() {
    // debugger
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
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