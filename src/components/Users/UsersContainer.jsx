/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import {  follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

/*
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
} */
let mapStateToProp = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (
    connect (mapStateToProp, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: getUsersThunkCreator,
       /*  onPageChangedThunkCreator */
        })
) (UsersContainer);
