import React from 'react'
import umodule from './Users.module.scss'
import userPhoto from '../../img/avatar.png'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
    
    return <div>
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p && umodule.selectedPage}
                onClick={() => props.onPageChanged(p)}>{p}</span>)
            }
            </div>
        {props.users.map(u => <div key={u.id} className={umodule.userWidget}>
            <div className={umodule.avatarWidget}>
                <div>
                    <img alt='#' src={u.photos.small ? u.photos.small : userPhoto} className={umodule.profilePic}/>
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