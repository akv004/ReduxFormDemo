import React, { Fragment } from "react";
import { Field, FieldArray, FormSection, reduxForm } from "redux-form";
//import validate from "./validate";

export const RenderFacets = (props) => {
  const { facets } = props;

  return (
    <Fragment>
      {facets.map((facet, index) => {
        return (
          <div key={index}>
            <FormSection name={facet.displayName}>
              <div className="displayName"> {facet.displayName}</div>

              {facet.values.map((value, ind) => (
                <div key={ind} className="displayValue">
                  <label htmlFor="employed">{value.name}</label>
                  <div>
                    <Field
                      name={value.name}
                      id={value.name}
                      component="input"
                      type="checkbox"
                    />
                  </div>
                </div>
              ))}
            </FormSection>
          </div>
        );
      })}
    </Fragment>
  );
};

const MyForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, data } = props;
  const { facets } = data;

  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="facets" component={RenderFacets} facets={facets} />

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
