import React from 'react'
import SignupFormContainer from '../session/signup_form_container'
import PostIndexContainer from '../posts/post_index_container'
//import post idex when its made

export const splash = ({currentUser}) => {
  
  if (currentUser){
    return (
      <div className="splash-omni">
        <PostIndexContainer className="splashPosts"/>
        
      </div>
    )
  }else{
    return (
      < SignupFormContainer />
    )
  }
}