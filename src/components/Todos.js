import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render (){
    return this.props.todos.map((todo) => (
    <TodoItem key={ todo.id } todo={todo}/>
    )); 
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;

// our Todos has a props type of todos 
// which we are passing in from App.js so it needs to be added as a props type.