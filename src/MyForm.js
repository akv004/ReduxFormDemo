import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
//import validate from "./validate";

const MyForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MyForm" // a unique identifier for this form
  //validate,
})(MyForm);
