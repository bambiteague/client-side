export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "START_FETCHING_POSTS" });
    fetch("http://localhost:3001/posts")
      .then((response) => response.json())
      .then((posts) => {
        dispatch({ type: "ADDING_POSTS" }, posts);
        debugger
      });
  };
};

// Do I need to include 'this.props' chained before my '.dispatch'? 
// going back through the lessons and see this, going to continue with the lesson for a bit before altering my actual code. 

// trying to gain an understanding of why I can't seem to get my seeded posts to appear in an array of the posts. 
