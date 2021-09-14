
const postReducer = (state = { posts: [], requesting: true }, action) => {
  switch(action.type) {
    case "START_FETCHING_POSTS":
      return {
        ...state,
        requesting: true,
      };
    case "ADDING_POSTS":
      return {
        posts: [...state],
        requesting: false,
      };
    default:
      return state;
  }
};

export default postReducer;
