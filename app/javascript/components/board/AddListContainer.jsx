import React, { Component } from "react";

class AddListContainer extends Component {
  render() {
    return (
      <div id="new-list" className="new-list">
        <span>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className="x-icon icon"></i>
        </div>
      </div>
    );
  }
}

export default AddListContainer;
