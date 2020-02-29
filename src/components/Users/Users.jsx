import React from 'react'
import umodule from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/avatar.png'

let Users = (props) => {
    if(props.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items)
        });
    }
    
    return <div >
        {props.users.map(u => <div key={u.id} className={umodule.userWidget}>
            <div className={umodule.avatarWidget}>
                <div>
                    <img src={u.photos.small ? u.photos.small : userPhoto} className={umodule.profilePic}/>
                </div>
                <div>
                    {u.followed 
                    ? <button className={umodule.userButton} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button className={umodule.userButton} onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </div>
            <div className={umodule.bioWidet}>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </div>
        </div>)
        }
    </div>
}

export default Users;