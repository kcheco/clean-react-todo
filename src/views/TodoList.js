import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {  
  render() {
    const {
      dataSource,
      handleToggleCheckbox,
      handleDelete
    } = this.props;

    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="todo-list col-xl-5 col-md-8 my-3 py-3 px-4 shadow-sm mx-auto rounded bg-white">
              <h1 className="mb-4">Todo List</h1>
              { dataSource.showPending().length < 1 &&
                <p>What I like to do best is nothing.</p>
              }
              { dataSource.showPending().map(todo => (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  handleToggleCheckbox={ handleToggleCheckbox }
                  handleDelete={ handleDelete }
                  buttonText={ [dataSource.buttonText.forTodoItem] } />
              ))}
            </div>
          </div>
        </section>
        <section className="container">
          <div className="row">
            <div className="todo-list col-xl-5 col-md-8 my-3 py-3 px-4 shadow-sm mx-auto rounded bg-white">
              <h1 className="mb-4">Completed List</h1>
              { dataSource.showCompleted().length < 1 &&
                <p>You are slacking!</p>
              }
              { dataSource.showCompleted().map(todo => (
                <TodoItem
                  key={ todo.id }
                  todo={ todo }
                  handleToggleCheckbox={ handleToggleCheckbox }
                  handleDelete={ handleDelete }
                  buttonText={ [dataSource.buttonText.forTodoItem] } />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}