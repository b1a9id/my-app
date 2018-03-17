import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  render() {
  	const tasks = [
  		{title: 'Todo1st', id: 0},
	    {title: 'Todo2nd', id: 1}
	    ];
    return (
        <div>
	        <h1>TODO App</h1>
	        <TodoInput />
	        <TodoList tasks={tasks} />
        </div>

    );
  }
}

export default App;
