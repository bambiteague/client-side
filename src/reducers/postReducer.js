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
      // debugger
      return {
        ...state,
        posts: [...action.payload],
        requesting: false,
      };

    case "DISPLAY_SPECIFIC_POST":
      const post = action.payload.posts.find(
        (post) => post.id === Number(action.payload.postId)
      );
      return {
        ...state,
        post: post,
        requesting: false,
      };

    default:
      return state;
  }
};

export default postReducer;
