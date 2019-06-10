import React from "react";

import "./TodoListItem.scss";

export default class TodoListItem extends React.Component {
  
  render() {
    const { label, done, important,  onDeleted, onToggleImportant, onToggleDone } = this.props;
    let classNames = ``;

    if (done) {
      classNames += ` done`;
    }
    if (important) {
      classNames += ` important`;
    }
    return (
      <span className="d-flex justify-content-between align-items-center h3">
        <span className={classNames} onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button 
            className="btn btn-outline-danger mr-2" 
            onClick={onDeleted}
          >
            <i className="far fa-trash-alt" />
          </button>
          <button
            className="btn btn-outline-info"
            onClick={onToggleImportant}
          >
            <i className="fas fa-exclamation" />
          </button>
        </div>
      </span>
    );
  }
}
