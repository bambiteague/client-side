const postReducer = (state = { posts: [], requesting: false }, action) => {
  switch (action.type) {
    case "START_FETCHING_POSTS":
      return {
        ...state,
        requesting: true,
      };
      break;
      // will start a request to our backend to get the posts
      // remember fetch is asynchonous
      // now if it is still requesting(set to 'true') you can optionally add a loading screen/message
    case "ADDING_POSTS":
      return {
        ...state,
        requesting: false,
        posts: [...action.posts]
      }
      break;

    default:
      return state
      break;
  }
};
