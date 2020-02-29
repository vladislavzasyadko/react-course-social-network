import React from 'react'
import umodule from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0){
    props.setUsers(
        [
            { id: 1, photoUrl: 'https://sun9-24.userapi.com/c845120/v845120123/12603b/e0fCudomv8Y.jpg', followed: false, fullName: "Vlad", status: 'cool', location: { country: 'Russia', city: 'Piterland' } },
            { id: 2, photoUrl: 'https://sun9-10.userapi.com/c850216/v850216498/1944ab/QIPpJMBenFo.jpg', followed: true, fullName: "Misha", status: 'coool', location: { country: 'Russia', city: 'Moscow' } },
            { id: 3, photoUrl: 'https://sun9-63.userapi.com/c857528/v857528042/190051/jWN1e9GOuNM.jpg', followed: false, fullName: "Nikita", status: 'coo00l', location: { country: 'Russia', city: 'Saint-Petersburg' } },
            { id: 4, photoUrl: 'https://sun9-70.userapi.com/c846322/v846322748/fd74d/c07Nqh-FdE8.jpg', followed: true, fullName: "Danila", status: 'coolll', location: { country: 'Russia', city: 'Vyborg' } },
        ]);}
        
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={umodule.profilePic}/>
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;