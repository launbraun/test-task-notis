import {Field, reduxForm} from "redux-form"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {login} from "../redux/auth-reducer"
import React from "react"
import './styles.css'


const required = value => value ? undefined : 'Обязательное поле'

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Введите корректный e-mail адрес' : undefined


const password = value =>
    value && !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g.test(value) ?
        'Ваш пароль недостаточно надёжен' : undefined


const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className={'form__wrapper'}>
        <div className={'column__right'}>
            <label>{label}:</label>
        </div>
        <div className={'column'}>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span className={'span'}>{error}</span>) || (warning &&
                <span className={'span'}>{warning}</span>))}
        </div>

    </div>
)


const LoginForm = (props) => {

    return (
        <div className={'login__form'}>
            <h1>Войти</h1>
            <form onSubmit={props.handleSubmit} className={''}>
                <div className={''}>
                    <Field name="email" type="email"
                           component={renderField} label="Email"
                           validate={[required, email]}
                    />
                </div>
                <div className={''}>
                    <Field name="Password" label='Password' type='password'
                           validate={[required, password]}
                           component={renderField}/>
                </div>
                <div className={'btn__center'}>
                    <button className={'btn-new'}>Войти</button>
                </div>
            </form>
        </div>
    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
