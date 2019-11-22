// import React from 'react'
import { Link } from 'react-router-dom';

import React, { Component } from 'react'
import SearchContainer from './search_container';

export class NavBar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    let display;
    let {currentUser} = this.props ;
    // console.log(currentUser)
    if (currentUser) {
      display = (
        <nav className="navbar">
          <div className="navbar-util">
            <div className="navbar-left">
              <Link className="daLink" to={`/`}>
                <i className="fab fa-instagram"></i>
                {/* <img className="Icon" src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png" alt=""/> */}
              </Link>
              <Link className="daLink" to={`/`}>
                <p>Dronestagram</p>
              </Link>
              {/* <div className="nav-search">
              <input type="text" placeholder="search" />
            </div> */}
            </div>
            <SearchContainer/>
            <div className="navbar-right">
              <div
                className="daLink2"
                onClick={() => this.props.openModal("upload")}
              >
                <i className="far fa-plus-square"></i>
              </div>
              <Link className="navbar-right-link" to={`/explore`}>
                <i className="far fa-compass"></i>
              </Link>

              <Link
                className="navbar-right-link"
                to={`/users/${currentUser.id}`}
              >
                <i className="far fa-user"></i>
                {/* <img
                className="Icon"
                src="https://icon-library.net/images/person-icon-transparent-background/person-icon-transparent-background-28.jpg"
                alt=""
              /> */}
              </Link>
            </div>

            {/* <input
            type="file"
            onChange={e => this.setState({ photos: e.target.files })}
            multiple
            value="Create Post"
          /> */}
          </div>
        </nav>
      );
    } else {
      display = (
        <nav className="unused">
          <br />
          <br />
          <br />
        </nav>
      );
    }
    return (
      <div>
        {display}
      </div>
    )
  }
}

export default NavBar

// const NavBar  = ({currentUser}) => {
//   let display;
//   // console.log(currentUser)
//   if(currentUser) {
//     display = (
//       <nav className="navbar">
//         <div className="navbar-util">
//           <div className="navbar-left">
//             <Link className="daLink" to={`/`}>
//               <i className="fab fa-instagram"></i>
//               {/* <img className="Icon" src="https://images.vexels.com/media/users/3/141955/isolated/preview/d0f766bbe2603124417ed31d027b14c8-camera-icon-or-logo-by-vexels.png" alt=""/> */}
//             </Link>
//             <Link className="daLink" to={`/`}>
//               <p>Dronestagram</p>
//             </Link>
//             {/* <div className="nav-search">
//               <input type="text" placeholder="search" />
//             </div> */}
//           </div>
//           <div className="nav-search">
//             <input type="text" placeholder="search" />
//           </div>
//           <div className="navbar-right">
//             <div
//               className="daLink"
//               onClick={() => this.props.openModal("upload")}
//             >
//               <i class="far fa-plus-square"></i>
//             </div>
//             <Link className="navbar-right-link" to={`/explore`}>
//               <i className="far fa-compass"></i>
//             </Link>

//             <Link className="navbar-right-link" to={`/users/${currentUser.id}`}>
//               <i className="far fa-user"></i>
//               {/* <img
//                 className="Icon"
//                 src="https://icon-library.net/images/person-icon-transparent-background/person-icon-transparent-background-28.jpg"
//                 alt=""
//               /> */}
//             </Link>
//           </div>

//           {/* <input
//             type="file"
//             onChange={e => this.setState({ photos: e.target.files })}
//             multiple
//             value="Create Post"
//           /> */}
//         </div>
//       </nav>
//     );
//   }else{
//      display = (
//         <nav className="unused">
//           <br/>
//           <br/>
//           <br/>
//         </nav>
//     );
//   }
//   return display;
// }






// export default NavBar
