import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers( [
        {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU', followed: false, fullName:'Dima', status:'I am a boss', locations: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU', followed: true, fullName:'Shasa', status:'I am boss', locations: {city: 'Minskww', country: 'Belarusww'} },
        {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU', followed: false, fullName:'Valya', status:'I boss', locations: {city: 'Minskee', country: 'Belaruseee'} },
        {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj4GTCguN61w82acXyKlOjfUanmA3P06A65g&usqp=CAU', followed: true, fullName:'Sveta', status:'boss', locations: {city: 'Minskrr', country: 'Belarusrrr'} },
    ])};
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src= {u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                         <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button> :
                         <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.locations.country}</div>
                        <div>{u.locations.city}</div>
                    </span>
                </span>
            </div>

            )

        }
    </div>
}

export default Users;
