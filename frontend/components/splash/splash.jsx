import React from 'react'
import SignupFormContainer from '../session/signup_form_container'
//import post idex when its made

export const splash = ({currentUser}) => {

  if (currentUser){
    return (
      <div>
        {/* this will be post index container */}
      </div>
    )
  }else{
    return (
      < SignupFormContainer />
    )
  }
}