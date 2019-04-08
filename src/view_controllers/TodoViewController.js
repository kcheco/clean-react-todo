import React, { Component } from 'react';
import TodoForm from '../views/TodoForm';
import TodoList from '../views/TodoList';
import TodoViewModel from '../view_models/TodoViewModel';

const _refreshTodos = Symbol('_refreshTodos');
const _clearErrorMessage = Symbol('_clearErrorMessage');

/**
 * Manages the data flow from ui interactions in order to receive
 * new information to pass to views
 */
export default class TodoViewController extends Component {
  constructor(props) {
    super(props);
    this.state = { taskName: '', errorMessage: '', todos: [] };
    this.viewModel = new TodoViewModel(this.state.todos);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.modelController.todos !== this.state.todos) {
      this.setState({
        todos: nextProps.modelController.todos
      })
      this.viewModel = new TodoViewModel(nextState.todos)
    }
  }

  handleInput = (e) => {
    this.setTaskName(e);
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskName === "" || this.state.taskName === null || typeof this.state.taskName === 'undefined' ) {
      this.setState({
        errorMessage: 'The task name of the todo cannot be blank or empty.'
      })
    } else {
      this.props.modelController.addTodo(this.state.taskName);
      this.clearTaskName();
      this[_clearErrorMessage]();
    }
  }

  handleToggleCheckbox = (todo) => {
    this.props.modelController.updateTodo(todo)
    this[_refreshTodos]()
  }

  handleDelete = (id) => {
    this.props.modelController.removeTodoById(id);
    this[_refreshTodos]()
  }

  setTaskName(e) {
    this.setState({
      taskName: e.target.value
    })
  }

  clearTaskName() {
    this.setState({
      taskName: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <TodoForm
          taskName={ this.state.taskName }
          errorMessage={ this.state.errorMessage }
          buttonText={ [this.viewModel.buttonText.forTodoForm] }
          handleInput={ this.handleInput }
          handleFormSubmit={ this.handleFormSubmit }
        />
        <TodoList
          dataSource={ this.viewModel }
          handleToggleCheckbox={ this.handleToggleCheckbox }
          handleDelete={ this.handleDelete }
        />
      </React.Fragment>
    );
  }

  // private method to obtain the latest state of todos from modelcontroller
  [_refreshTodos]() {
    this.setState({
      todos: this.props.modelController.todos
    });
  }

  // private method to reset state of error message
  [_clearErrorMessage]() {
    this.setState({
      errorMessage: ''
    })
  }
}