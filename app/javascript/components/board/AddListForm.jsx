import React, { Component } from "react";

class AddListForm extends Component {
  state = {
    title: ""
  };

  handleTitleChange = e => {
    const newValue = e.target.value;
    this.setState({ title: newValue });
  };

  render() {
    return (
      <div id="new-list" className="new-list selected">
        <span>Add a list...</span>
        <input
          onChange={this.handleTitleChange}
          type="text"
          placeholder="Add a list..."
        />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className="x-icon icon"></i>
        </div>
      </div>
    );
  }
}

export default AddListForm;
