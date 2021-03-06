import React, { Component } from 'react'

export class AddToDo extends Component {
  state = {
    title: '' 
  }

  onSubmit = (e) => {
    e.preventDefault();
    //we are calling the props method because we'll need to pass 
    //this up (in App.js where AddToDo was imbedded) the same way we did with delete and markComplete
    this.props.addToDo(this.state.title);
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({ title: e.target.value }); 
  
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex' }}>
        <input 
        type="text" name="title" style={{flex: '10', padding: '5px' }} 
        placeholder="Add Todo" value={this.state.title} onChange={this.onChange}/>
        <input type="submit" value="Submit" className="btn" 
        style={{flex: '1'}}/>
      </form> 
    )
  }
}

export default AddToDo
