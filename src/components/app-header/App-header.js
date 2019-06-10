import React from "react";

export default class AppHeader extends React.Component {
  render() {
    const { todos } = this.props;
    let done = 0;
    let notDone = 0;

    todos.forEach(element => {
      if (!element.done) {
        done++;
      } else notDone++;
    });

    return (
      <div className="d-flex align-items-center justify-content-between">
        <h1>Todo App</h1>
        <span>{done} more to do, {notDone} done</span>
      </div>
    );
  }
}
