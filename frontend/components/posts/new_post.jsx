import React, { Component } from 'react'

export class NewPost extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({}, this.props.post, { photoFile: null});
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // handleInput(e){
  //   this.setState({title: e.currentTarget.value})
  // }
  handleFile(e) {
    this.setState({ title: e.currentTarget.files[0] });

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
    this.props
      .createPost(formData)
      .then(() => {
        this.props.history.push("/");
      })
      .then(() => {
        this.props.closeModal();
      });
        
    
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append('post[caption]', this.state.title);
    // if (this.state.photoFile) {

    //   formData.append('post[photo]', this.state.photoFile);
    // }
    // $.ajax({
    //   url: '/api/posts',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // }).then(
    //   (response) => console.log(response.message),
    //   (response) => {
    //     console.log(response.responseJSON)
    //   }
    // );
  }
  render() {
    return (
      <div className="newPost">
        
      </div>
    );
  }
}

export default NewPost
