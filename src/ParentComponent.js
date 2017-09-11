import React, {Component} from 'react';
import CreateToDo from './CreateToDo';
import ListItems from './ListItems';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput : "",
      inputListItem : ""

    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    let userInput = e.target.value;
    this.setState({userInput: userInput});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submit clicked');
    this.setState({userInput: this.state.userInput, inputListItem: this.state.userInput});
    this.setState({userInput: ""});
  }
  render() {
    return (
      <div>
      <input placeholder="insert to-do here" onChange= {this.handleInput}/>
        <CreateToDo onClick={this.handleSubmit}/>
        <ListItems createItem={this.state.inputListItem}/>
      </div>
    )
  }
}

export default ParentComponent;
