import React from "react";

import TodoListItem from "../todo-list-item/TodoListItem";

import "./Todo-list.scss";

export default class TodoList extends React.Component {
  onDeleted = id => {
    console.log("Deleted", id);
  };

  render() {
    const { todos, onDeleted, onToggleImportant, onToggleDone } = this.props;

    const elements = todos.map(item => {
      return (
        <li
          key={item.id}
          className="list-group-item pl-4 pr-4 text-left todo-list-item"
        >
          <TodoListItem
            label={item.label}
            important={item.important}
            done={item.done}
            onDeleted={() => onDeleted(item.id)}
            onToggleImportant={() => onToggleImportant(item.id)}
            onToggleDone={() => onToggleDone(item.id)}
          />
        </li>
      );
    });

    return <ul className="list-group mt-4">{elements}</ul>;
  }
}
