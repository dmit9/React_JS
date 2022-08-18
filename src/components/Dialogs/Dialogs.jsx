
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
    let dialogsData = [
        {id: 1, name:'Dima'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sveta'},
        {id: 4, name:'Sacha'},
        {id: 5, name:'Viktor'},
        {id: 6, name:'Valera'}
    ]
    let messagesData = [
        {id: 1, message:'HiHi'},
        {id: 2, message:'Yo'},
        {id: 3, message:'Ssss'},
        {id: 4, message:'EEE'},
        {id: 5, message:'AAAr'},
    ]
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name='Andrey' id='2'/>
            <DialogItem name='Sveta' id='3'/>
            <DialogItem name='Sacha' id='4'/>
            <DialogItem name='Viktor' id='5'/>
            <DialogItem name='Valera' id='6'/>
        </div>
        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message='Yoo'/>
            <Message message='SSSS'/>
            <Message message='SSSS'/>
        </div>
    </div>
        )
    }
export default Dialogs;
