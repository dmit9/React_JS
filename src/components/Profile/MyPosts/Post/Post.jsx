/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Post.module.css';

class Post extends React.Component {

    render() {
        return <div className={s.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU'/>
                    {this.props.message}
                    <div>
                    <span>like {this.props.likesCount}</span>
                    </div>
            </div>
    }
}

export default Post;
