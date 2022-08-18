
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div class='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/dialog" element={<Dialogs />}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
