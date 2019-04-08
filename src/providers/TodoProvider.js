import React, { Component } from 'react';
import TodoViewController from '../view_controllers/TodoViewController';
import TodoDataStore from '../data_store/TodoDataStore';

// preserves state of todos for the app
export default class TodoProvider extends Component {
  constructor(props) {
    super(props)
    const modelController = new TodoDataStore();
    this.modelController = modelController;
  }

  render() {
    return (
      <TodoViewController
        modelController={ this.modelController } />
    )
  }
}