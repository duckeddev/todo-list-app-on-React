import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../app-todo-list";
import AppAddItem from "../app-add-item";

export default class App extends React.Component {
  maxID = 100;

  state = {
    todoData: [
      this.createItem("Drink Coffee"),
      this.createItem("Play to football"),
      this.createItem("Build awesome app on React")
    ],
    term: "",
    filter: "all"
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxID++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex(el => el.id === id);

      const newArr = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];

      return {
        todoData: newArr
      };
    });
  };

  addItem = label => {
    const newItem = this.createItem(label);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[indx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex(el => el.id === id);

      const oldItem = todoData[indx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...todoData.slice(0, indx),
        newItem,
        ...todoData.slice(indx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(el => {
      return el.label.toLowerCase().includes(term);
    });
  }

  onSearchLabel = term => {
    this.setState({ term });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onFilterTodoList = label => {
    this.setState({
      filter: label
    });
  };

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    return (
      <div className="text-center w-50 m-auto pt-5">
        <AppHeader todos={todoData} />
        <SearchPanel
          onSearchLabel={this.onSearchLabel}
          filter={filter}
          onFilterTodoList={this.onFilterTodoList}
        />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AppAddItem onAdded={this.addItem} />
      </div>
    );
  }
}
