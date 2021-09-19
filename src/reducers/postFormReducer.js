const initialState = {
    formValues: {},
    message: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FORM_VALUES":
        return {
          ...state,
          formValues: action.payload
        };
      case "SUBMIT_POST":
        console.log("--- Triggered Form submission ---");
        console.log("Form Data - ", state.formValues);
        return {
          ...state,
          message: "Post submitted!!"
        };
      default:
        return state;
    }
  };
  
  export default reducer;