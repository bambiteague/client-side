export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS" });
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((posts) => {
        dispatch({ type: "DISPLAYING_POSTS" }, posts);
        debugger
      });
  };
};

// Good to go, properly fetching the posts I seeded. 

