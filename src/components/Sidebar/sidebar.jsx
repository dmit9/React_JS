import s from './Sidebar.module.css';

const Sidebar = (props) => {
        return (
        <div className={s.items}>
            <span>Friend </span>
            <div>{props.name}</div>
        </div>
        )
    }

    export default Sidebar;
