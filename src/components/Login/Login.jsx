import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";

const maxLength10 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
                  <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Email'} name={'email'} component={Input}
                                validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}
                                validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <Field type={"checkbox"} name={'rememberMe'} component={Input} /> remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )
}
const LoginReduxForm = reduxForm({ form: 'Login' }) (LoginForm)

const Login = (props) => {
    const onSubmittt =(formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmittt}/>
            </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);
