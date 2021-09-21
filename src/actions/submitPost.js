export const addPost = (post) => ({ type: "SUBMIT_POST", payload: post });

export const submitPost = (post) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(post),
    };
    fetch("http://localhost:3001/posts", configObj)
      .then((response) => response.json())
      .then((json) => {
        dispatch(addPost(json));
      });
  };
};
