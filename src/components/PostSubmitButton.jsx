import { connect } from "react-redux";

const PostSubmitButton = (props) => (
  <div>
    <button onClick={(e) => props.dispatch({ type: "SUBMIT_POST", value: "Submit" })}>Submit Your Post</button>
  </div>
);

export default connect(null)(PostSubmitButton);
