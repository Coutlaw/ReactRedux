import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  // reduxForm will create the props to use these methods from component
  // destructure input and label from the props
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Label"/>
      </form>
    );
  }
}

export default reduxForm({
  form: 'StreamCreate',
})(StreamCreate);
