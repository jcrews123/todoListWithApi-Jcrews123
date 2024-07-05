import React from "react";
import ReactDOM from "react-dom/client";
//css file
import "../styles/index.css";
//home is entire component that gets rendered
import Home from "./component/home.jsx";
//used to render
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

