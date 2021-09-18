const postReducer = (
  state = {
    posts: [],
    requesting: true,
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_POSTS":
      return {
        ...state,
        posts: [state.posts],
        requesting: true,
      };
      // posts are getting fetched and found, but not added to be seen 
      //the case below needs to be reached, why is it not getting there to update the state?
    case "ADDING_POSTS":
      return {
        ...state,
        posts: [action.posts],
        requesting: false, 
      };
    default:
      return state;
  }
};

export default postReducer;
