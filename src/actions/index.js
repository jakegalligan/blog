import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}

export const DELETE_POST = "delete_post";
