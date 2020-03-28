import React from 'react'
import {reduxForm, Field} from 'redux-form'


const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={'input'} name={'login'} placeholder={'Login'} /></div>
            <div><Field component={'input'} name={'password'} type="password" placeholder={'Password'} /></div>
            <div><Field component={'input'} name={'rememberMe'} type={'checkbox'} appearance={'checkbox'}/><label> remember me</label></div>
            <div><button>Login</button></div>
        </form>

    )
}

const LoginReduxForm = reduxForm({
        //unique name for the form
        form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <div>LOGIN</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
