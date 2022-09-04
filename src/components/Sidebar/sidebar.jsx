import Friends from './Friends';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
        let sidebarElem = props.friends.map (f => <Friends id= {f.id} name={f.name} key={f.id}/>);
        return (
            <div className={s.friends}>
                <div className={s.friend}>{sidebarElem}</div>
            </div>

        )
    }

    export default Sidebar;
