import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

export default class CreateToDo extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placehoolder="what do you need to do?">
          </input>
          </form>
        <button>add</button>
      </div>
    )
  }
}

const container = document.getElementById('container');

ReactDOM.render(
  <CreateToDo/>, container);
