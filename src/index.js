import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Users from './components/users';
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Users />
//   </React.StrictMode>
// );

const users = document.getElementById("root");
const Root = createRoot(users);

Root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
