import React from 'react'
import umodule from './Users.module.scss'
import * as axios from 'axios'
import userPhoto from '../../img/avatar.png'

class Users extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount((response.data.totalCount < 50 && response.data.totalCount) || 50);
                });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                });
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div >
            <div>{pages.map(p =>
                <span className={this.props.currentPage === p && umodule.selectedPage}
                onClick={() => this.onPageChanged(p)}>{p}</span>)
            }
            </div>
            {this.props.users.map(u => <div key={u.id} className={umodule.userWidget}>
                <div className={umodule.avatarWidget}>
                    <div>
                        <img alt='#' src={u.photos.small ? u.photos.small : userPhoto} className={umodule.profilePic} />
                    </div>
                    <div>
                        {u.followed
                            ? <button className={umodule.userButton} onClick={
                                () => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button className={umodule.userButton} onClick={
                                () => { this.props.follow(u.id) }}>Follow</button>}
                    </div>
                </div>
                <div className={umodule.bioWidet}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
            }
        </div>
    }
}

export default Users;