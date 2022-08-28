
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import  { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';
/* console.log(state) */

const renderEntireTree = () => {
    /* console.log(state) */
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>
    </React.StrictMode>
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

reportWebVitals(renderEntireTree);
