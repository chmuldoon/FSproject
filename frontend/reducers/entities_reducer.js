import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from "./post_reducer";
import commentsReducer from "./comments_reducer";
import followsReducer from "./follows_reducer";

followsReducer
const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  follows: followsReducer
});

export default entitiesReducer;