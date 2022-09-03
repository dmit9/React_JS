import s from './Sidebar.module.css';

const Friends = (props) => {
    console.log(props);
        return (
                <div className={s.items}>
                    <span>Friend </span>
                    <div>{props.name}</div>
                </div>

        )
    }

    export default Friends;
