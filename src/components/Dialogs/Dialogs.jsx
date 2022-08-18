
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

const Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name='Dima' id='1'/>
            <DialogItem name='Andrey' id='2'/>
            <DialogItem name='Sveta' id='3'/>
            <DialogItem name='Sacha' id='4'/>
            <DialogItem name='Viktor' id='5'/>
            <DialogItem name='Valera' id='6'/>
        </div>
        <div className={s.messages}>
            <Message message='Hi'/>
            <Message message='Yoo'/>
            <Message message='SSSS'/>
            <Message message='SSSS'/>
            <Message message='SSSS'/>
        </div>
    </div>
)

export default Dialogs;
