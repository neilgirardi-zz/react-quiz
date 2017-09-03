import React from 'react';
import ReactDOM from 'react-dom';
import './css/vendor/bootstrap-4.css';
import App from './components/Quiz';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
