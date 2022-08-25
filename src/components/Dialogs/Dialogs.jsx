/* eslint-disable array-callback-return */

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    const messagesElements = props.state.messages.map( mess => (<Message message={mess.message}/>));
    const newMessageElement = React.createRef();
    const addMessage = () => {
        const text = newMessageElement.current.value;
        alert(text)};

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
        <button onClick={addMessage}>Button</button>
        <textarea ref ={newMessageElement}></textarea>
    </div>
        )
    }
export default Dialogs;
