import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//take value of input
//push to empty array
//template array name in <ul>

const ToDos = ["go for walk", "stuff", "things"];

export default class ListItems extends Component {
  constructor() {
    super();
  }

  render() {
    let items = ToDos.map((element, i) => {
      return <li key={i}>{element}</li>
    });

    return (
      <ul>
        {items}
      </ul>
    )
  }
}
