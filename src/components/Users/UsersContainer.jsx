/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import {  follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator, onPageChangedThunkCreator } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
        { this.props.isFetching ? < Preloader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProp = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        setTotalUsersCount: state.usersPage.setTotalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect (mapStateToProp, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    onPageChangedThunkCreator
    }) (UsersContainer);
