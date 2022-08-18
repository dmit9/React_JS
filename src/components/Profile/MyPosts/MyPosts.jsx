import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (<div className={s.postsBlock}>
        <h3>My post</h3>
        <div >
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are you?' count='10'/>
            <Post message="Its my first post" count='20'/>
            <Post/>
        </div>
    </div>)
}

export default MyPosts;
