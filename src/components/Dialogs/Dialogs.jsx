/* eslint-disable array-callback-return */

import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dial => (<DialogItem name={dial.name} id={dial.id}/>));
    let messagesElements = props.state.messages.map( mess => (<Message message={mess.message}/>))
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
