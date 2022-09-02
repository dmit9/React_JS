
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
            <Header />
            <Navbar /* friends={props.state.sidebar.friends} *//>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route exact path="/dialogs"
                        element={<DialogsContainer/>}/>
                    <Route path="/profile"
                        element={<Profile />}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
