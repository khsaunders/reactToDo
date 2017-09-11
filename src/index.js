import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './ParentComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ParentComponent />, document.getElementById('container'));
registerServiceWorker();
