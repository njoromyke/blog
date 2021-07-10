import {
  POST_BUSINESS_FAIL,
  POST_BUSINESS_REQUEST,
  POST_BUSINESS_SUCCESS,
  POST_CATEGORY_FAIL,
  POST_CATEGORY_REQUEST,
  POST_CATEGORY_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_RESET,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_RESET,
  POST_DELETE_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_TOP_FAIL,
  POST_TOP_REQUEST,
  POST_TOP_SUCCESS,
  POST_TRENDING_FAIL,
  POST_TRENDING_REQUEST,
  POST_TRENDING_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_RESET,
  POST_UPDATE_SUCCESS,
} from "../constants/postsContants";

export const postsListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postTopReducer = (state = { topPost: [] }, action) => {
  switch (action.type) {
    case POST_TOP_REQUEST:
      return { loading: true, ...state };
    case POST_TOP_SUCCESS:
      return { loading: false, topPost: action.payload };
    case POST_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postBusinessReducer = (state = { bizPost: [] }, action) => {
  switch (action.type) {
    case POST_BUSINESS_REQUEST:
      return { loading: true, ...state };
    case POST_BUSINESS_SUCCESS:
      return { loading: false, bizPost: action.payload };
    case POST_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postCategoryReducer = (state = { catPosts: [] }, action) => {
  switch (action.type) {
    case POST_CATEGORY_REQUEST:
      return { loading: true, ...state };
    case POST_CATEGORY_SUCCESS:
      return { loading: false, catPosts: action.payload };
    case POST_CATEGORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postTrendingReducer = (state = { trendPost: [] }, action) => {
  switch (action.type) {
    case POST_TRENDING_REQUEST:
      return { loading: true, ...state };
    case POST_TRENDING_SUCCESS:
      return { loading: false, trendPost: action.payload };
    case POST_TRENDING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const postsDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postsDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { loading: true };
    case POST_DELETE_SUCCESS:
      return { loading: false, deleted: true };
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case POST_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const postsCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true };
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case POST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const postUpdateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return { loading: true };
    case POST_UPDATE_SUCCESS:
      return { loading: false, success: true, post: action.payload };
    case POST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case POST_UPDATE_RESET:
      return { post: {} };
    default:
      return state;
  }
};
