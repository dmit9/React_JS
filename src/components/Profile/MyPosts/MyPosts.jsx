﻿import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    /* console.log(props) */
    let newPostElement = React.createRef();
    let postsElements = props.posts.map (p => <Post message={p.message} likesCount={p.likesCount}/>);
    let addPost = () => {
        props.addPost();
        /* props.updateNewPostText(''); */
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (<div className={ s.postsBlock }>
        <h3>My post</h3>
        <div >
            <div>
                <textarea onChange={ onPostChange }
                        ref={newPostElement}
                        value={props.newPostText} />
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
