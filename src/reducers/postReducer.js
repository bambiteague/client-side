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
        posts: [action.payload],
        requesting: true,
      };

    case "DISPLAYING_POSTS":
      return {
        ...state,
        posts: [...action.payload],
        requesting: false, 
      };
    default:
      return state;
  }
};

export default postReducer;
