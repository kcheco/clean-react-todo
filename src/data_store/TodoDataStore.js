import Todo from '../models/Todo';

const _generateId = Symbol('generateId');

// manages a repository of todos
export default class TodoDataStore {
  constructor() {
    this.todos = []
  }

  addTodo(payload) {
    console.log(payload);
    if(payload === "" || payload === null || typeof payload === 'undefined') {
      return
    }
    
    const todo = new Todo({ taskName: payload, completed: false, id: this[_generateId]()} );
    this.todos = [ ...this.todos, todo ];
  }

  getAllTodos() {
    return this.todos;
  }

  removeTodoById(id) {
    this.todos = this.todos.filter( t => t.id !== id );
    console.log(`Todo with id ${id} has been removed`);
  }

  updateTodo(payload) {
    if (this.todos.includes(payload)) {
      let todos = this.todos.slice();
      todos = todos.map(todo => {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed;
          
          console.log(`Todo updated: ${JSON.stringify(todo)}`);
          return todo;
        } else {
          return todo;
        }
      })

      this.todos = todos;
    }
  }

  showPending() {
    return this.todos.filter( t => t.completed === false )
  }

  showCompleted() {
    return this.todos.filter( t => t.completed === true )
  }

  [_generateId]() {
    return Date.now() + (Math.floor(Math.random() * 1000000000000));
  }
}