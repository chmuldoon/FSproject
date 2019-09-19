import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          deletePost={this.props.deletePost} 
          />
      );
    });

    return (
      <div>
          {posts}
      </div>
    );
  }
}

export default PostIndex;