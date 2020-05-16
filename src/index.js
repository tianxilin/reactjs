import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Time from './Time'
import logo from './logo.svg';

// const element = <h1>Hello World!!</h1>

// const loginForm = (
//   <form>
//   <input name="username" type="text" />
//   <input name="password" type="password" />
//   <button type="submit">Sign in</button>
//   </form>
//  );

//  function Welcome(props) {
//   return (
//   <div>
//     <h1>Hello, {props.name}!
//     {props.number}
//     {props.str}</h1>
//     <div>Age:{props.age} </div>
//   </div>
//   );
//  }

// function Card(props) {
//   return <div className="card">
//     <img src={logo} className="App-logo" alt="logo"></img>
//     <h1>{props.title}</h1>
//     <p>{props.subtitle}</p>
//   </div>;
// }

const CurrentTime = () => <h1>current time is {new Date().toLocaleTimeString()} now.</h1>

// setInterval (
//   function () {
//     ReactDOM.render(
//       <CurrentTime /> ,
//       document.getElementById('root')
//     );
//   } ,
//   1000
// )

serviceWorker.unregister();

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
