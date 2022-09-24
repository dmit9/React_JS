import React from 'react';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
    return (
                  <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={"input"} />
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'password'} component={"input"} />
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'rememberMe'} component={"input"} /> remember me
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
