import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../ducks';

const renderInput = (field) =>
  <div>
    <input {...field.input} type={field.type} className="form-control" />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>;


class Signup extends Component {
    handleFormSubmit = ({ email, password, passwordConfirm }) => {
        // call action creator to sign up the user
        this.props.signupUser({ email, password, passwordConfirm });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name="email" component={renderInput} type="email" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name="password" component={renderInput} type="password" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field name="passwordConfirm" component={renderInput} type="password" />
                </fieldset>
                {this.props.errorMessage &&
                    <div className="alert alert-danger">
                        <strong>Oops!</strong> {this.props.errorMessage}
                    </div>
                }
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
        );
    }
}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = 'Please enter a password confirmation';
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors;
}

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate,
}, mapStateToProps, actions)(Signup);
