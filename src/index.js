
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = () => {
    /* console.log(state) */
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <BrowserRouter>
          <App state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}/>
        </BrowserRouter>
    </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

reportWebVitals(renderEntireTree);
