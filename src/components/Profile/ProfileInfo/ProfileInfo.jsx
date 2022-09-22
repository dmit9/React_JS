﻿import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
        if (!props.profile ) {
            return <Preloader />
        }
    return (
    <div>
       {/*  <div>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>
        </div> */}
        <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div>ID - {props.profile.userId}</div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
    </div>
    )
}

export default ProfileInfo;
