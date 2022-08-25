import s from './Sidebar.module.css';

const Sidebar = (props) => {
        return (
        <div className={s.items}>
            Friends
            <div className={s.itemAll}>
                <div className={s.item}>
                    <span>Friend </span>
                    <div>{props.name}</div>
                </div>
            </div>
        </div>
        )
    }

    export default Sidebar;
