
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect (mapStateToProp, mapDispatchToProps) (Users);
