import {
  POST_BUSINESS_FAIL,
  POST_BUSINESS_REQUEST,
  POST_BUSINESS_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
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
  POST_UPDATE_SUCCESS,
} from "../constants/postsContants";
import axios from "axios";
export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });
    const { data } = await axios.get(`/api/posts`);
    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const listTop = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_TOP_REQUEST,
    });
    const { data } = await axios.get(`/api/posts/top`);
    dispatch({
      type: POST_TOP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listBiz = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_BUSINESS_REQUEST,
    });
    const { data } = await axios.get(`/api/posts/category/business`);
    dispatch({
      type: POST_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTrend = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_TRENDING_REQUEST,
    });
    const { data } = await axios.get(`/api/posts/category/trending`);
    dispatch({
      type: POST_TRENDING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_TRENDING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const listPost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POST_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/posts/${id}`);
    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePost = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`/api/posts/${id}`, config);
    dispatch({
      type: POST_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost =
  (title, image, category, post) => async (dispatch, getState) => {
    try {
      dispatch({ type: POST_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/posts`,
        { title, image, category, post },
        config
      );
      dispatch({ type: POST_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updatePost = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/posts/${post._id}`, post, config);
    dispatch({ type: POST_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
