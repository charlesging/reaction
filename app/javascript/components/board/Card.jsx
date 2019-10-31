import React, { Component } from "react";

class Card extends Component {
  render() {
    const card = this.props.card;

    return (
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="cover-image"></div>
          <div className="card-info">
            <p>{card.description}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon due-soon ">{card.due_date}</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
