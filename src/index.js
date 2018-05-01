import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
const app = document.getElementById('root');
ReactDOM.render(
    <Router >
        <div>
            <h1> React js</h1>
            <h2> Hello World!!</h2>
        </div>
    </Router>
    , app);
