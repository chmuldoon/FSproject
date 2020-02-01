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
    // debugger
    this.props.fetchAllFollows()
    this.props.fetchAllComments()



    // this.props.fetchUsers();
  }

  render() {
    // debugger
    let { currentUser } = this.props
    let followingIds = currentUser.followings.map(
      following => following.id);

    let followedPosts = this.props.posts.filter(post =>
      followingIds.includes(post.author.id)
    );
    const posts = followedPosts.reverse().map(post => {
      // debugger
      return (
        <IndexItemContainer
          key={post.id}
          post={post}
          fetchPosts={this.props.fetchPosts}
          fetchPost={this.props.fetchPost}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike}
          createComment={this.props.createComment}
          deleteComment={this.props.deleteComment}
        />
      );
      });

    return (
      <div className="index">
        <title>Clonestagram</title>
        {posts}
      </div>
    );
  }
}

export default PostIndex;