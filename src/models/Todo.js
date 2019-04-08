// to manage the construction of a todo
export default class Todo {
  constructor(props) {
    this.id = props.id
    this.taskName = props.taskName
    this.completed = props.completed || false
  }
}