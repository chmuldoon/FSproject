import React, { Component } from 'react'

export class Follow extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({}, this.props.follow);

  }
  render() {
    return (
      <div>
        {/* <p>heyo</p> */}
      </div>
    )
  }
}

export default Follow
