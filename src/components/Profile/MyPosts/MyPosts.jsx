import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message:'fdgdfg', likesCount: 11 },
        {id: 2, message:'rtrtrrt', likesCount: 15},
        {id: 3, message:'cvcv', likesCount: 5}
    ]

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
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
            <Post message="Its my first post" likesCount='20'/>
            <Post/>
        </div>
    </div>)
}

export default MyPosts;
