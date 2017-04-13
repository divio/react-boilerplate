import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';
import Header from './components/Header';

import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <Header />
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);
