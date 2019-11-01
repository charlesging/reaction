import React, { Component } from "react";

class ToggleableCardForm extends Component {
  state = {
    title: ""
  };

  handleTitleChange = e => {
    const newTitle = e.target.value;
    this.setState({ title: newTitle });
  };

  handleCardSubmit = () => {
    this.props.onSubmit(this.state.title, () => {
      this.setState({ title: "" });
      this.props.onFormToggle();
    });
  };

  render() {
    return (
      <div className="add-dropdown add-bottom active-card">
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            onChange={this.handleTitleChange}
            value={this.state.title}
          />
          <div className="members"></div>
        </div>
        <a className="button" onClick={this.handleCardSubmit}>
          Add
        </a>
        <i className="x-icon icon" onClick={this.props.onFormToggle}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    );
  }
}

export default ToggleableCardForm;
