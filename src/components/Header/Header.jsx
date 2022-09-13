import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

class Header extends React.Component {
    render() {
    return <header className={s.header}>
        <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"/>
        <div className={s.loginBlock}>
            { this.props.isAuth ? this.props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
}
export default Header;
