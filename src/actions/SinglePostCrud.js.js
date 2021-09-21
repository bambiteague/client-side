export const fetchSinglePost = (postId) => {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS", payload: postMessage });
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((posts) => {
        dispatch({
          type: "DISPLAY_SPECIFIC_POST",
          payload: { posts, postId },
        });
      });
  };
};

export const handleDelete = (post,postId) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        post,
        postId,
      },
    });
  };
};

export const handleUpdate = (post,postId) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_POST",
      payload: {
        postId,
        post,
      },
    });
  };
};

