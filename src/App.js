import React, { Component } from 'react';
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import { render } from '@testing-library/react';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
      title: 'Call my parents',
      completed: false
      },
      {
        id: uuid.v4(),
      title: 'Dinner with Viviana',
      completed: false
      },
      {
        id: uuid.v4(),
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

  addToDo = (title) => {
    const newToDo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newToDo] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
        </div>
      </div>
    );
  } 
}
  
export default App;
