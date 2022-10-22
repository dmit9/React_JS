import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux';
import Preloader from './components/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader /> }
        return (
            <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar  />
            <Suspense fallback={<div><Preloader /></div>}>
                <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path="/dialogs"
                        element={<DialogsContainer/>}/>
                    <Route path="/profile/:userId"
                        element={<ProfileContainer />}/>
                    <Route path="/profile"
                        element={<ProfileContainer />}/>
                    <Route path="/users*"
                        element={ <UsersContainer />}/>
                    <Route path="/login*"
                        element={ < LoginPage />}/>
                </Routes>
                </div>
            </Suspense>
            </div>
          );
}}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp})) (App);
