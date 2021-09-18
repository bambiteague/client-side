export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS", payload: postMessage });
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((posts) => {
        dispatch({ type: "DISPLAYING_POSTS", payload: posts}
        );
      });
  };
};


