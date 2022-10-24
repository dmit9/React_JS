import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import {connect} from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css'

const maxLength10 = maxLengthCreator(25);

const LoginForm = (handleSubmit, error) => {
    return (
                  <form onSubmit={handleSubmit}>
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
                    { error && <div className={styles.formSummaryError}>
                            {error}
                    </div>}
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
