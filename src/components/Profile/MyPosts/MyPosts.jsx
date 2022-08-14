import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (<div className={s.content}>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?' count='10'/>
            <Post message="Its my first post" count='20'/>
            <Post/>
        </div>
    </div>)
}

export default MyPosts;
