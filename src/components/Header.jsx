import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../redux/auth-reducer";
import './styles.css'


class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})


const Header = (props) => {

    return <header className={'header'}>
        <div className={'wrapper'}>
        <div className={'header__left'}>
            <NavLink to={'/'}>Главная</NavLink>
            <NavLink to={'/profile'}>Профиль</NavLink>
        </div>
        <div className={'header__right'}>
            {props.isAuth
                ? <div>
                <button className={'btn__log'} onClick={props.logout}>Выйти</button>
                </div>
                : <NavLink to={'/login'}>Войти</NavLink>}
        </div>
        </div>
    </header>
}

export default connect(mapStateToProps, {logout})(HeaderContainer);
