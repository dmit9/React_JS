﻿import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? s.active : s.item;
const Navbar = () => {
    return (<nav className={s.nav}>
    <div className={s.item}>
        <NavLink to='/profile' className={setActive} >Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to='/dialog' className={setActive} >Messages</NavLink>
    </div>
    <div className={s.item}>
        <a>News</a>
    </div>
    <div className={s.item}>
        <a>Music</a>
    </div>
    <div className={s.item}>
        <a>Settings</a>
    </div>
</nav> )
}

export default Navbar;

