﻿import Preloader from '../../Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../asserts/images/userPhoto.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile ) {
        return <Preloader />
    }
const onMainPhotoSelected = (e) => {
    if (e.target.files && e.target.files.length) {
        savePhoto(e.target.files[0]);
    }
}
const onSubmit =(formData) => {
    console.log(formData)
    saveProfile(formData).then(
        () => {
            setEditMode(false);
        }
    );
    }
    return (
    <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
           { isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
           { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)} } profile={profile} isOwner={isOwner}/> }

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}) => {
        return <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>ID - {profile.userId}</div>
            <div>{profile.fullName}</div>
            <div><b>Looking for a job</b>{profile.lookingForAJob ? "  yes" : "  no"}</div>
            <div><b>About me</b>{profile.aboutMe}</div>
            <div><b>My professional skills</b>{profile.lookingForAJobDescription}</div>
            <div><b>Contacts</b>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
               })}
            </div>
        </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className='s.contact'><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
