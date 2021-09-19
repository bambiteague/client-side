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

    case "DISPLAY_SPECIFIC_POST":
      const index = state.posts.findIndex(post => post.id !== action.payload)
      const newArray = [...state.posts];
      newArray[index].completed = true
      return {
        ...state,
        post: [newArray],
      };

    default:
      return state;
  }
};

export default postReducer;
