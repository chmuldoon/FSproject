import React from 'react'
import { Link } from 'react-router-dom';


const NavBar  = ({currentUser, logout}) => {
  let display;
  console.log(currentUser)
  if(currentUser) {
    display = (
    
      <nav className="navbar">
        <div className="navbar-util">
          <p>Clonestagram</p>
          <h2>{currentUser.username}</h2>
          <button onClick={() => logout()}></button>
        </div>
      </nav>


    );
  }else{
     display = (
        <nav className="unused">
          <br/>
          <br/>
          <br/>
        </nav>
    );
  }
  return display;
}






export default NavBar
