import React from 'react';
import _ from 'lodash';
import Header from './components/Header';
import Create from './components/Create';
import Todolist from './components/Todolist'


import './App.css';




export default class App extends React.Component{
 
  toDos = [{
    task:"eating",
    isComplete:true
  },
  {
    task:"dancing",
    isComplete:true
  },
  {
    task:"sleepings",
    isComplete:false
  }]

state = {
  toDos:this.toDos
}

createTask = (task) => {
 this.toDos.push({
   task:task,
   isComplete:true
  })

  this.setState({toDos:this.toDos})
}

deleteTask = (tasktodelete) => {
  _.remove(this.toDos,(todo) => todo.task === tasktodelete)

  this.setState({toDos:this.toDos})
}



  render(){
    return (
      <div className="App">
      <p>Search</p>
        <Header/>
        <Create createTask={this.createTask} todos={this.state.toDos}/>
        <Todolist toDos = {this.state.toDos} deleteTask={this.deleteTask}/>
      </div>
    );
  }

}


