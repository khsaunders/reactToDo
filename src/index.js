import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CreateToDo from './CreateToDo';
import ListItems from './ListItems';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
      <h1>To Do List</h1>
      <CreateToDo />
      <ul>
      <ListItems />
      </ul>
   </div>, document.getElementById('container'));
registerServiceWorker();
