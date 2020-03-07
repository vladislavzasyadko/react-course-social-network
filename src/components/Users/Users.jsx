import React from 'react'
import umodule from './Users.module.scss'
import userPhoto from '../../img/avatar.png'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p && umodule.selectedPage}
                    onClick={() => props.onPageChanged(p)}>{p}</span>)
            }
        </div>

        {props.users.map(u =>
            <div key={u.id} className={umodule.userWidget}>
                <div className={umodule.avatarWidget}>
                    <NavLink to={`/profile/${u.id}`}>
                        <div>
                            <img alt='#' src={u.photos.small ? u.photos.small : userPhoto} className={umodule.profilePic} />
                        </div>
                    </NavLink>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                className={umodule.userButton} onClick={() => {
                                    props.toggleIsFollowing(true, u.id);
                                    usersAPI.unfollow(u.id)
                                        .then(response => {
                                            props.unfollow(u.id);
                                        });
                                    props.toggleIsFollowing(false, u.id);
                                }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                className={umodule.userButton} onClick={() => {
                                    props.toggleIsFollowing(true, u.id);
                                    usersAPI.follow(u.id).then(resultCode => {
                                        if (resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });
                                    props.toggleIsFollowing(false, u.id);
                                }}>Follow</button>}
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

            </div>
        )
        }

    </div>
}

export default Users;