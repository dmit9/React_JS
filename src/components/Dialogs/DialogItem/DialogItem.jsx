/* eslint-disable array-callback-return */

import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let patch = '/dialogs/'+ props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={patch}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
