const initialState = {
  formValues: {},
  message: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FORM_VALUES":
      return {
        ...state,
        formValues: action.payload,
      };
    case "SUBMIT_POST":
      return {
        ...state,
        message: "Post submitted!!",
      };
    default:
      return state;
  }
};

export default reducer;
