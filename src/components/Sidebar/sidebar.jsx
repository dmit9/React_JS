import Friends from './Friends';
import s from './Sidebar.module.css';
import React from 'react';

class Sidebar extends React.Component {
    render() {
        let sidebarElem = this.props.friends.map (f => <Friends id= {f.id} name={f.name} key={f.id}/>);
        return (
            <div className={s.friends}>
                <div className={s.friend}>{sidebarElem}</div>
            </div>

        )
    }
}
    export default Sidebar;
