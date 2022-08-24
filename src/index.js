import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'


const first = "Expert"
const second = "Developer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
    <h1>Hello World</h1>
    <p>{`I am an ${first} ${second}`}</p>
  
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

