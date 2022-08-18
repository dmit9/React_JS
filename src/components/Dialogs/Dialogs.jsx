
import s from './Dialogs.module.css';

const Dialogs = (props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                Dima
            </div>
            <div className={s.dialog}>
                Andrey
            </div>
            <div className={s.dialog}>
                Sveta
            </div>
            <div className={s.dialog}>
                Sacha
            </div>
            <div className={s.dialog}>
                Viktor
            </div>
            <div className={s.dialog}>
                Valera
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>Yo</div>
            <div className={s.message}>Sssss</div>
        </div>
    </div>
)

export default Dialogs;
