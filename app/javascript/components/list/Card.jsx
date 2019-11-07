import React, { Component } from "react";
import CardModalContainer from "../card/CardModalContainer";
import { Link } from "react-router-dom";
import moment from "moment";

class Card extends Component {
  render() {
    const card = this.props.card;

    return (
      <Link to={`/cards/${card.id}`}>
        <div className="card-background">
          <div className="card ">
            <i className="edit-toggle edit-icon sm-icon"></i>
            <div className="cover-image"></div>
            <div className="card-info">
              {card.labels.map(label => (
                <div
                  key={label}
                  className={`card-label ${label} colorblindable`}
                ></div>
              ))}
              <p>{card.title}</p>
            </div>
            <div className="card-icons">
              <i className="clock-icon sm-icon due-soon ">{card.due_date}</i>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
