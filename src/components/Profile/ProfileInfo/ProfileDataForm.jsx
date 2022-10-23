import React from 'react';
import s from './ProfileInfo.module.css';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    <div>
        <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
    </div>
    <div>
        <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
    </div>

    <div>
        <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], Textarea, )}
    </div>
    <div>
        <b>About me</b>
        {createField("About me", "aboutMe", [], Textarea, )}
    </div>
{/*     <div><b>Contacts</b>{Object.keys(profile.contacts).map(key => {     52 мин
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
       })}
    </div> */}
</form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm
