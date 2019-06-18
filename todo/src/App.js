import React, {Component} from 'react';
import './App.css';
import Todolist from './Components/Todolist'; 

class App extends Component {
  render(){
    return(
      <div className='App'>
        <h1>Redux Todo App</h1>
        <Todolist />
      </div>
    )
  }

}

export default App;
