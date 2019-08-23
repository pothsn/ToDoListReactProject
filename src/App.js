import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with fiancee',
        completed: false
      },
      {
        id: 3,
        title: 'Work on project at devCodeCamp',
        completed: false
      },
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
  
  //Delete Todo
  delTodo= (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;