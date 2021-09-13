export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: "START_FETCHING_POSTS"})
    fetch("http://localhost:3001/posts")
    .then(response => response.json())
    .then(posts => {
      // debugger
      dispatch({type: "ADDING_POSTS"}, posts)
    })
  };
};
