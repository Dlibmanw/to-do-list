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
      completed: true
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
  
  markComplete = () => {
    console.log('from App.js')
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  } 
}
  
export default App;
