import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from './redux/state';

export const renderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>
    </React.StrictMode>
    );
}
