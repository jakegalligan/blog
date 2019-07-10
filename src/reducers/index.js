import { combineReducers } from "redux";
import PostsReducer from "./reducer-posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
