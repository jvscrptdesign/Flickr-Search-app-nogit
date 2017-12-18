import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './components/SearchPage_.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchPage title="Find a photo"/>, document.getElementById('root'));
registerServiceWorker();
