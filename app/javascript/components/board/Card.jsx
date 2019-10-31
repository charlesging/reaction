import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="cover-image"></div>
          <div className="card-info">
            <p>
              Add members to a board (via the sidebar to collaborate, share and
              discuss.)
            </p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon due-soon ">Sep 5</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
