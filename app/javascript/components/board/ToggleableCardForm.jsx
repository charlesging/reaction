import React, { Component } from "react";

const ToggleableCardForm = props => {
  return (
    <div className="add-dropdown add-bottom active-card">
      <div className="card">
        <div className="card-info"></div>
        <textarea name="add-card"></textarea>
        <div className="members"></div>
      </div>
      <a className="button">Add</a>
      <i className="x-icon icon" onClick={props.onFormToggle}></i>
      <div className="add-options">
        <span>...</span>
      </div>
    </div>
  );
};

export default ToggleableCardForm;
