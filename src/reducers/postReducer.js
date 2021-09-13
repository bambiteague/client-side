const postReducer = (state = { posts: [], requesting: true }, action) => {
  switch (action.type) {
    case "START_FETCHING_POSTS":
      return {
        ...state,
        requesting: true,
      };

    case "ADDING_POSTS":
      return {
        ...state,
        requesting: false,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
};

export default postReducer;
