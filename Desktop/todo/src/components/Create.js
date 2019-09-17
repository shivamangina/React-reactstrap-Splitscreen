import React, { Component } from 'react';
import _ from 'lodash';

export default class Create extends Component {


state={
    error:null
}

renderError = () => {
    if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;

}


    handleSubmit = (event) => {
        event.preventDefault();
        const createInput = this.refs.createinput;
        let task = createInput.value;

        const validateInput = this.validateInput(task) 
        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });

        this.props.createTask(task);
        this.refs.createinput.value = ""
    }


    validateInput = (task)=> {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }



    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Add a task" ref="createinput"></input>
              <button>Add</button>
              {this.renderError()}
              </form>
            </div>
        )
    }
}
