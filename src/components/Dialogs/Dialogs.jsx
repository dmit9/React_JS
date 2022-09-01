
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    let messagesElements = state.messages.map( mess => (<Message message={mess.message}/>));
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.onSendMessage();
    };
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            <div>{ messagesElements }</div>
        <div>
            <div><textarea placeholder='Enter message'
                    onChange={onNewMessageChange}
                    value={newMessageBody}></textarea></div>
            <div><button onClick={ onSendMessageClick }>addMessage</button></div>
        </div>
        </div>
    </div>
        )
    }
export default Dialogs;
