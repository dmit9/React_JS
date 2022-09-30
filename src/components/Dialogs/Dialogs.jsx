import {reduxForm, Field} from 'redux-form';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import s from './Dialogs.module.css';
import { Navigate } from "react-router-dom";
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const maxLength10 = maxLengthCreator(50);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id} key={dial.id}/>));
    let messagesElements = state.messages.map( mess => (<Message message={mess.message} key={mess.id}/>));
    let addNewMessage = (values) =>{
        props.onSendMessage(values.newMessageBody);
    }

    if ( !props.isAuth) return <Navigate to={'/login/'} />;

    return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsElements }
        </div>
        <div className={s.messages}>
            <div>{ messagesElements }</div>
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
    )
}

const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                            validate={[required, maxLength10]}/>
                </div>
                <button >Send</button>
            </form>
        )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;
