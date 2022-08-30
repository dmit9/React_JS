
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let dialogsElements = props.state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    let messagesElements = props.state.messages.map( mess => (<Message message={mess.message}/>));
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };
    let oneMessageChange = () =>{
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }
    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            { messagesElements }
        </div>
        <button onClick={ addMessage }>addMessage</button>
        <textarea onChange={oneMessageChange}
                    ref ={newMessageElement}
                    value={props.state.newMessageText}></textarea>
    </div>
        )
    }
export default Dialogs;
