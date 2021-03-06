import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import NavBarContainer from "./navbar/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import UserShowContainer from "./profile/user_show_container";
import PostIndexContainer from "./posts/post_index_container";
import PostShowContainer from "./posts/post_show_container";
import PostExploreContainer from "./posts/post_explore_container";
import Modal from "./modal/modal";




const App = () => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <Route exact path="/" component={SplashContainer} />

    <ProtectedRoute path="/posts/:postId" post=":postId" component={PostShowContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
    <ProtectedRoute path="/explore" component={PostExploreContainer} />
  </div>
);

export default App;