import React from "react";

export default class AppAddItem extends React.Component {
  
  state = {
    label: ''
  }

  onChangeValue = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className="input-group mt-4" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          value={this.state.label}
          onChange={this.onChangeValue}
        />
        <div className="input-group-append">
          <button type='submit'
            className="btn btn-outline-primary"
          >
            Add item
          </button>
        </div>
      </form>
    );
  }
}
