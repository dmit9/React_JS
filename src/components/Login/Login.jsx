import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
                  <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={Input}
                                validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={Input}
                                validate={[required, maxLength10]}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )
}
const LoginReduxForm = reduxForm({ form: 'Login' }) (LoginForm)

const Login = (props) => {
    const onSubmittt =(FormData) => {
        console.log(FormData)
    }
    return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmittt}/>
            </div>
}

export default Login;
