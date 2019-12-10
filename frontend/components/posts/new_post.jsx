import React, { Component } from 'react'

export class NewPost extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({}, this.props.post, { photoFile: null});
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[caption]", this.state.caption);
    formData.append("post[photo]", this.state.photoFile);
    this.props.createPost(formData)
      .then(() => { this.props.closeModal() })      
      .then(() => { this.props.history.push("/") })
  }


  render() {
    return (
      <div className="newPost">
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="previewBox">

          </div>
          <label className="UploadButton" htmlFor="img"> Upload </label>
          <input type="file" id="img" onChange={this.handleFile.bind(this)} />
          <input
            type="text"
            placeholder="Write a caption..."
            onChange={this.update("caption")}
          />
          <div>
            <input type="submit" value="Share" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost
