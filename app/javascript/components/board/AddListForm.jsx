import React, { Component } from "react";

class AddListForm extends Component {
  state = {
    title: "",
    listFormOpen: false
  };

  handleTitleChange = e => {
    const newValue = e.target.value;
    this.setState({ title: newValue });
  };

  handleFormToggle = e => {
    this.setState(prevState => ({
      listFormOpen: !prevState.listFormOpen
    }));
  };

  handleFormSubmit = () => {
    console.log(this.state.title);
    this.props.onSubmit(this.state.title, () => {
      this.setState({ title: "" });
      this.handleFormToggle();
    });
  };

  render() {
    return (
      <div
        id="new-list"
        className={`new-list${this.state.listFormOpen ? " selected" : ""}`}
      >
        <span onClick={this.handleFormToggle}>Add a list...</span>
        <input
          onChange={this.handleTitleChange}
          type="text"
          placeholder="Add a list..."
        />
        <div>
          <input
            onClick={this.handleFormSubmit}
            type="submit"
            className="button"
            value="Save"
          />
          <i onClick={this.handleFormToggle} className="x-icon icon"></i>
        </div>
      </div>
    );
  }
}

export default AddListForm;
