/* eslint-disable array-callback-return */

import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let patch = '/dialogs/'+ props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
                <NavLink to={patch}>{props.name}</NavLink>
            </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name:'Dima'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sacha'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Valera'}
    ]
    let messages = [
        {id: 1, message:'HiHi'},
        {id: 2, message:'Yo'},
        {id: 3, message:'Ssss'},
        {id: 4, message:'EEE'},
        {id: 5, message:'AAAr'},
    ]
    let dialogsElements = dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    let messagesElements = messages.map( mess => (<Message message={mess.message}/>))
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
    </div>
        )
    }
export default Dialogs;
