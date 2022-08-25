﻿import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU'/>
                {props.message};
                <div>
                <span>like {props.likesCount}</span>
                </div>
            </div>
    )
}

export default Post;
