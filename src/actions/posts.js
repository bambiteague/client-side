import { useReducer } from "react";

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: "START_FETCHING_POSTS"})
    // this will send a dispatch action to the reducer and the action will have a type
  };
};
