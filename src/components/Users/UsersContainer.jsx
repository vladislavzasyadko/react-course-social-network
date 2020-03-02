import {connect} from 'react-redux'
import Users from './Users';
import {followActionCreator, unfollowActionCreator, setUsersActionCreator} from '../../redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=> {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId)=> {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users)=> {
            dispatch(setUsersActionCreator(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;