import { connect } from 'react-redux'
import Users from './Users';
import { followActionCreator, unfollowActionCreator, setUsersActionCreator,
     setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../redux/usersReducer'

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;