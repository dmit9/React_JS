/* eslint-disable no-unused-expressions */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value )
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    return (
        <div>
            { !editMode &&
                <div>
                    <b>Status:</b><span onDoubleClick={ activateEditMode }> {props.status || "______"}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={ deactivateEditMode } autoFocus={true}
                        value={status}></input>
                </div>
            }
        </div>
        )
}

export default ProfileStatusWithHooks;
