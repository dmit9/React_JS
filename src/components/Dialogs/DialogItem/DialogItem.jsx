/* eslint-disable array-callback-return */
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

class DialogItem extends React.Component {
    render() {
    let patch = '/dialogs/'+ this.props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={patch}>{this.props.name}</NavLink>
        </div>
    )
}
}
export default DialogItem;
