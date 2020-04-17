import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // reduxForm will create the props to use these methods from component
  // destructure input and label from the props
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <label>{meta.error}</label>
      </div>
    );
  }

  // gets called as a callback from handleSubmit
  onSubmit(formValues) {
    // not needed with redux forms, its handled for us
    //event.preventDefault();
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Label"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  // errors.foo and foo is a Field name, then redux will perform validation and prevent components from rendering
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'StreamCreate',
  validate: validate,
})(StreamCreate);
