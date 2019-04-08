import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const {
      todo,
      handleToggleCheckbox,
      handleDelete,
      buttonText
    } = this.props;

    return (
      <div className="todo-item row">
        <div className="col-1">
          <input
            type="checkbox"
            checked={ todo.completed }
            onChange={() => handleToggleCheckbox(todo)} />
        </div>
        <div className="col-8">
          <label
            className={ todo.completed ? "completed" : "" } >
            { todo.taskName }
          </label>
        </div>
        <div className="col">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => handleDelete(todo.id)}>
            { buttonText }
          </button>
        </div>
      </div>
    );
  }
}