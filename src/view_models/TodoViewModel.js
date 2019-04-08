// obtain data to make presentable to the views
export default class TodoViewModel {
  constructor(dataSource) {
    this.buttonText = {
      forTodoForm: 'Add to List',
      forTodoItem: 'Delete'
    }
    this.dataSource = dataSource
  }

  showCompleted() {
    return this.list().filter( t => t.completed === true )
  }

  showPending() {
    return this.list().filter( t => t.completed === false )
  }

  list() {
    return this.dataSource;
  }
}