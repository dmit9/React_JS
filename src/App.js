import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
            <Header />
            <Navbar  />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path="/dialogs"
                        element={<DialogsContainer/>}/>
                    <Route path="/profile/*"
                        element={<ProfileContainer />}/>
                    <Route path="/users/*"
                        element={ <UsersContainer />}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
