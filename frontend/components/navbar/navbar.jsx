import React from 'react'
import { Link } from 'react-router-dom';


const NavBar  = ({currentUser}) => {
  let display;
  console.log(currentUser)
  if(currentUser) {
    display = (
    
      <nav className="navbar">
        <div className="navbar-util">
          <Link to={`/`}>
            <img className="Icon" src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png" alt=""/>
          </Link>
          <p>Clonestagram</p>
          <h2>{currentUser.username}</h2>
          <Link to={`/users/${currentUser.id}`}>
            <img className="Icon" src="https://icon-library.net/images/person-icon-transparent-background/person-icon-transparent-background-28.jpg" alt=""/>
          </Link>

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
