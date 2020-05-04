import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import './App.css';
import axios from 'axios';
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'
import About from './components/pages/About'
import { render } from '@testing-library/react';
// import uuid from 'uuid'; (no longer needed after getting 'todos' from Jsonplaceholder)

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
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
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      title: title, 
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  render() {
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={ props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteToDo={this.deleteToDo}/>
              </React.Fragment>
            )} />
            <Route path='/about' component={About}/>
            
          </div>
        </div>
      </Router>
    );
  } 
}
  
export default App;
