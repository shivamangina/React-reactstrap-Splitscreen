import React from 'react';
import Header from "./components/Header";
import CreateTask from './components/Createtask';
import Todolist from './components/Todolist';
import './App.css'


class App extends React.Component {
  render(){
    return (
      <div>
      <Header/>
      <CreateTask/>
       <Todolist/>
       </div>
     );
  }
 
}

export default App;
