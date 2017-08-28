import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap-4.css';
import App from './Quiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
