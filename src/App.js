
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { Routes, Route } from "react-router-dom";

function App(props) {
    /* let posts = [
        {id: 1, message:'fdgdfg', likesCount: 11 },
        {id: 2, message:'rtrtrrt', likesCount: 15},
        {id: 3, message:'cvcv', likesCount: 5}
    ] */
  return (
    <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div class='app-wrapper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                    <Route exact path="/dialogs" element={<Dialogs />}/>
                </Routes>
            </div>
        </div>
  );
}

export default App;
