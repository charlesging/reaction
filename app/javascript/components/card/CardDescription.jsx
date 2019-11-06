import React from "react";

const CardDescription = props => {
  return (
    <form className="description">
      <p>Description</p>
      {props.formVisible ? (
        <React.Fragment>
          <textarea
            onChange={props.onChange}
            className="textarea-toggle"
            rows="1"
            autoFocus
            value={props.description}
          ></textarea>
          <div>
            <div
              className="button"
              value="Save"
              name="description"
              onClick={props.onSubmit}
            >
              Save
            </div>
            <i onClick={props.onCloseForm} className="x-icon icon"></i>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span
            onClick={props.onToggleForm}
            id="description-edit"
            className="link"
          >
            Edit
          </span>
          <p className="textarea-overlay">{props.description}</p>
        </React.Fragment>
      )}
    </form>
  );
};

export default CardDescription;
