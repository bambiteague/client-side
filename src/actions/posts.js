export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: "START_FETCHING_POSTS"})
    // this will send a dispatch action to the postReducer and the action will have a type

    fetch("http://localhost:3001/posts")
    .then(response => response.json())
    .then(posts => {
      dispatch({type: "ADDING_POSTS"}, posts)
    })
  };
};
