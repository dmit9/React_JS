import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
const MyPosts = (props) => {
    let postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={ s.postsBlock }>
            <h3>My post</h3>
            <AddNewPostsForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}
const AddMyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component={Textarea} name="newPostText" placeholder="Enter your Post"
                        validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
)}
const AddNewPostsForm = reduxForm({form: "MyPostsForm"}) (AddMyPostsForm);

export default MyPosts;
