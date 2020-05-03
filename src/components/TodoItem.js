import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 
      'line-through' : 'none'
    }
  }
  markComplete = (e) => {
      console.log(this.props)
  }
  delete = (e) => {

  }
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind
          (this, id)} /> {' '}
          { title }
          <button style={btnStyle} onClick={this.props.deleteToDo.bind
          (this, id)}>Delete</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
} 
const btnStyle = {
  background: '#ff0000',
  color:'#fff',
  padding: '5px 8px',
  cursor: 'pointer', 
  float: 'right'
}

export default TodoItem  
