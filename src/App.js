import React, { Component } from 'react';
import AppHeader from './views/AppHeader';
import TodoProvider from './providers/TodoProvider';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <TodoProvider />
      </React.Fragment>
    );
  }
}

export default App;
