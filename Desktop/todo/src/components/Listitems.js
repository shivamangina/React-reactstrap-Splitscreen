import React, { Component } from 'react'

export default class Listitems extends Component {
    render() {
        return (
            <div>
            <li>
            {this.props.task} 
            <button onClick={this.props.deleteTask.bind(this,this.props.task)}>X</button> 
            </li>
            </div>
        )
    }
}
