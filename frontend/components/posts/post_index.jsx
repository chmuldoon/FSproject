import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
    // this.props.fetchUsers();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return <PostIndexItem
          key={post.id}
          post={post}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike} 
        />
      });

    return (
      <div>
          {posts}
      </div>
    );
  }
}

export default PostIndex;