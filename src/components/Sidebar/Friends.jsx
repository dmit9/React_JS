import s from './Sidebar.module.css';
import React from 'react';

class Friends extends React.Component {
    render() {
        return (
                <div className={s.items}>
                    <span>Friend </span>
                    <div>{this.props.name}</div>
                </div>

        )
    }
}
    export default Friends;
