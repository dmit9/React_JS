﻿import React from 'react';
import userPhoto from '../../asserts/images/userPhoto.png'
import styles from './users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL);

    return <div>
        <div>
        {slicedPages.map( p => {
            return <span className={props.currentPage === p && styles.selectedPage}
              onClick={ (e) => { props.onPageChanged(p); }} >{p}</span>
        })}
        </div>
        {
            props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img src= {u.photos.small != null ? u.photos.small : userPhoto}  className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?
                     <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> :
                     <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.id}</div>
                 {/*   <div>{u.locations.city}</div> */}
                </span>
            </span>
        </div>

            )
        }
    </div>
}

export default Users;