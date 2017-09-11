import React, {Component} from 'react';

class ListItems extends Component {
  render() {
    return (
      <span>{this.props.createItem}</span>
    )
  }
}

export default ListItems;
