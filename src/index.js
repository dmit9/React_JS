import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const posts = [
    {id: 1, message:'fdgdfg', likesCount: 11 },
    {id: 2, message:'rtrtrrt', likesCount: 15},
    {id: 3, message:'cvcv', likesCount: 5}
]
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts}/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
