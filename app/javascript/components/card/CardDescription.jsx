import React from "react";

const CardDescription = props => {
  return (
    <form className="description">
      <p>Description</p>
      {props.descriptionFormVisible ? (
        <React.Fragment>
          <textarea className="textarea-toggle" rows="1" autofocus>
            Cards have a symbol to indicate if they contain a description.
          </textarea>
          <div>
            <div className="button" value="Save">
              Save
            </div>
            <i
              onClick={props.onToggleDescriptionForm}
              className="x-icon icon"
            ></i>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <span
            onClick={props.onToggleDescriptionForm}
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
