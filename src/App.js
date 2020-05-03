import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
      title: 'Call my parents',
      completed: false
      },
      {
        id: 2,
      title: 'Dinner with Viviana',
      completed: false
      },
      {
        id: 3,
      title: 'Buy coffee',
      completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map (todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })  });
  }

  deleteToDo = (id) => {
      this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)
      })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
      </div>
    );
  } 
}
  
export default App;
