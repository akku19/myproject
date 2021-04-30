// import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rountings from './Rountings';
// import Newmenu from './Newmenu';
import App from './App';
import Home from './Home'
import Linecharts from './Linechart';
import MyChart from './MyChart'
import MyChart1 from './Mychart1';
import BrushChart from './BrushChart'
import Formdata from './Formdata'
import "./Style.css";
ReactDOM.render(
<>
<App />
</>
,
   document.getElementById('root')
 )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

