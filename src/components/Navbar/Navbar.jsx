﻿import { NavLink } from 'react-router-dom';
import SidebarContainer from '../Sidebar/sidebarContainer';
import s from './Navbar.module.css';

const setActive = ({ isActive }) => isActive ? s.active : s.item;
const Navbar = (props) => {
    /* const sidebarElem = props.friends.map (f => <Sidebar id={f.id} name={f.name}/>); */
    return (<nav className={s.nav}>
    <div className={s.item}>
        <NavLink to='/profile' className={setActive} >Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to='/dialogs' className={setActive} >Messages</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to='/users' className={setActive} >Users</NavLink>
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
    <div className={s.friends}>
        Friends
        <div >
            <SidebarContainer />
        </div>
    </div>
</nav> )
}

export default Navbar;
