import React from 'react';
import ReactDOM from 'react-dom/client';

const main = {
  color: "white",
  background: "green"
}

const first = "Expert"
const second = "Developer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={main}>Hello World</h1>
    <p>I am an {first}</p>
    <p>{second}</p>
  
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

