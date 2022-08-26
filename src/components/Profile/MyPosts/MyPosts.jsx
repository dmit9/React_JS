﻿import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>);
    const addPost = () => {
        props.addPost();
    };
    const newPostElement = React.createRef();
    let onPostChagge = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (<div className={s.postsBlock}>
        <h3>My post</h3>
        <div >
            <div>
                <textarea onChange={onPostChagge} ref={newPostElement}
                        value={props.newPostText} />
               {/*  <textarea ref={newPostElement}></textarea> */}
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            { postsElements }
        </div>
    </div>)
}

export default MyPosts;
