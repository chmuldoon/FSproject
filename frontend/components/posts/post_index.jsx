import React from 'react';
import PostIndexItem from './post_index_item';
import IndexItemContainer from './index_item_container';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
   
  }
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchUsers()
    debugger
    this.props.fetchAllFollows()
    this.props.fetchAllComments()



    // this.props.fetchUsers();
  }

  render() {
    // debugger
    
    const posts = this.props.posts.map(post => {
      // debugger
      return (
        <IndexItemContainer
          key={post.id}
          post={post}
          // fetchPosts={this.props.fetchPosts}
          // fetchPost={this.props.fetchPost}
          // createLike={this.props.createLike}
          // deleteLike={this.props.deleteLike}
          // createComment={this.props.createComment}
          // deleteComment={this.props.deleteComment}
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