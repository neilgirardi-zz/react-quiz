import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz';
import './css/vendor/bootstrap-4.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Quiz />, document.getElementById('root'));
registerServiceWorker();
