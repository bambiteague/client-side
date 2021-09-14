export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({type: "START_FETCHING_POSTS"})
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(json => {
            // my 'json' object is showing the array of objects just fine...but not passing them over to my postReducer via the action...?
        dispatch({type: "ADDING_POSTS"}, json) 
      })
  };
};
