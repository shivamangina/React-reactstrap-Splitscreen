import React, { Component } from 'react';
import Listitems from './Listitems';
import _ from 'lodash';

export default class Todolist extends Component {

renderItems = () => {
    return _.map(this.props.toDos,(todo,index) => {
        return <Listitems key={index} task={todo.task} isComplete={todo.isComplete} deleteTask={this.props.deleteTask}/>
    }
    )
    
   
  
}


    render() {
        return (
            <div>
            <ul>            
            {this.renderItems()}
          </ul>
  
            </div>
        )
    }
}
