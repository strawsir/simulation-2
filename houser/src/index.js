import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Wizard from './components/wizard/Wizard';
import {Provider} from 'react-redux';
import store from './ducks/store'

ReactDOM.render(
<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
