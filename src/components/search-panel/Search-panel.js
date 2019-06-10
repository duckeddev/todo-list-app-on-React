import React from "react";

export default class SearchPanel extends React.Component {
  state = {
    term: "",
    btns: [
      { name: "All", label: "all" },
      { name: "Active", label: "active" },
      { name: "Done", label: "done" }
    ]
  };

  onSearchLabel = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchLabel(term.toLowerCase());
  };

  render() {
    const { filter, onFilterTodoList } = this.props;
    const {btns} = this.state;
    const filterPanel = btns.map(({ name, label }) => {
      let clazz = filter === label ? `btn-info` : `btn-outline-info`;
      return (
        <button
          className={`btn ${clazz}`}
          key={label}
          onClick={() => onFilterTodoList(label)}
        >
          {name}
        </button>
      );
    });
    return (
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название задачи..."
          onChange={this.onSearchLabel}
        />
        <div className='input-group-append'>
          {filterPanel}
        </div>
      </div>
    );
  }
}
