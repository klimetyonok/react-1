import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 23 }
];

let dialogsData = [{
  id: 1,
  name: 'Agafia'
}, {
  id: 2,
  name: 'Arkadiy'
}, {
  id: 3,
  name: 'Nikifor'
}, {
  id: 4,
  name: 'Varvara'
}, {
  id: 5,
  name: 'Petr'
}];

let messagesData = [{
  id: 1,
  message: 'Hi'
}, {
  id: 2,
  message: 'How is your it-kourses?'
}, {
  id: 3,
  message: 'How are you doing?'
}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


