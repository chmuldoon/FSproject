import React, { Component } from 'react'

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.comment)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount(){
    this.props.fetchComments()

  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state).then(() => this.setState({body: ''}));
  
  }
  render() {
    return (
      <div className="commentAdd">
        <input
          placeholder="Add a comment"
          value={this.state.body}
          onChange={this.update("body")}
        ></input>
        <button
          onClick={this.handleSubmit.bind(this)}
          type="submit"
        >
          Post
        </button>
      </div>
    );
  }
}

export default Comment
