import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  postsCreateReducer,
  postsDeleteReducer,
  postsDetailsReducer,
  postsListReducer,
  postUpdateReducer,
} from "./reducers/postsReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  postsList: postsListReducer,
  userLogin: userLoginReducer,
  postsCreate: postsCreateReducer,
  postsDetails: postsDetailsReducer,
  postsDelete: postsDeleteReducer,
  postUpdate: postUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
