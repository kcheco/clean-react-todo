import React, { Component } from 'react';

export default class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg static-top navbar-dark bg-primary">
        <a className="navbar-brand mr-auto mr-lg-0" href="/">
          <h4>Clean React Todo</h4>
        </a>
      </nav>
    );
  }
}