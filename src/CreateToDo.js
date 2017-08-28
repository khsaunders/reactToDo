import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.css';

// export default class CreateToDo extends Component {
//   constructor(props){
//     super(props);
//
//     this.state= {value: ''}
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   render() {
//     return (
//       <div>
//         <form>
//           <input type="text" placeholder="what do you need to do?">
//           </input>
//           </form>
//         <button>add</button>
//       </div>
//     )
//   }
// }

export default class CreateToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('to-do created! ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange}></input>
        <button type="submit">add</button>
      </form>
    );
  }
}

const container = document.getElementById('container');

ReactDOM.render(
  <CreateToDo/>, container);
