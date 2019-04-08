import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    const {
      taskName,
      errorMessage,
      buttonText,
      handleInput,
      handleFormSubmit
    } = this.props;

    return (
      <section className="container">
        <div className="row">
          <div className="col-xl-5 col-md-8 my-3 py-3 px-4 shadow-sm mx-auto rounded bg-white">
            <h1 className="mb-4">What will you get done?</h1>
            <form 
              id="addTodo"
              onSubmit={ handleFormSubmit } >
              <div className="form-group mb-4">
                <input 
                  type="text"
                  name="taskName"
                  className={ errorMessage.length > 0 ? "is-invalid form-control" : "form-control" }
                  value={ taskName }
                  onChange={ handleInput }
                  onBlur={ handleInput }
                  autoFocus={ true }
                  placeholder="...Run this todo app locally" />
                  <div className="invalid-feedback">
                    { errorMessage }
                  </div>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  type="submit">
                  { buttonText }
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}