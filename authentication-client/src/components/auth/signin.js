import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

const renderInput = (field) => (
  <div>
    <input {...field.input} type={field.type} className="form-control" />
  </div>
)

class Signin extends Component {
    handleFormSubmit = ({ email, password }) => {
        // need to do something to log user in
        this.props.signinUser({ email, password });
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
                {this.props.errorMessage &&
                    <div className="alert alert-danger">
                        <strong>Oops!</strong> {this.props.errorMessage}
                    </div>
                }
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({ errorMessage: state.auth.error });

export default reduxForm({ form: 'signin' }, mapStateToProps, actions)(Signin);
