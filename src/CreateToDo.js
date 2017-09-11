import React, {Component} from 'react';

class CreateToDo extends Component {
  render() {
    return (
      <div>
        <button type="submit" onClick={this.props.onClick}>add</button>
      </div>
    )
  }
}

export default CreateToDo;
