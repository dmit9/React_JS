
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <div className='app-wrapper'>
            <Header />
            <Navbar friends={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path="/dialogs"
                        element={<Dialogs
                            state={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText} />}/>
                    <Route path="/profile"
                        element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}/>}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
