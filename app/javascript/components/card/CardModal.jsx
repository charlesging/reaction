import React, { Component } from "react";
import Label from "./Label";
import CardDescriptionContainer from "./CardDescriptionContainer";
import { Link } from "react-router-dom";
import AddCommentFormContainer from "../comments/AddCommentFormContainer";
import Comment from "../comments/Comment";

class CardModal extends Component {
  state = {
    title: this.props.card.title
  };

  handleTitleChange = e => {
    const newValue = e.target.value;
    this.setState({
      title: newValue
    });
  };

  // this is unfinished
  handleToggleArchived = () => {
    // (toggle archived state): TODO
    this.props.onUpdate({ archived: !this.props.card.archived }, () => {});
    // this.props.onUpdate({ archived: false }, () => {});
  };

  render() {
    const card = this.props.card;
    const labels = card.labels.map(label => (
      <Label key={label} color={label} />
    ));
    const comments = this.props.comments.map(comment => {
      return <Comment key={comment.id} {...comment} />;
    });

    return (
      <div id="modal-container">
        <Link to={`/boards/${card.board_id}`}>
          <div className="screen"></div>
        </Link>
        <div id="modal">
          <Link to={`/boards/${card.board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>
          {card.archived ? (
            <div class="archived-banner">
              <i class="file-icon icon"></i>This card is archived.
            </div>
          ) : null}
          <header>
            <i className="card-icon icon .close-modal"></i>
            <textarea
              name="title"
              onBlur={e => this.props.onSubmit({ title: e.target.value })}
              onChange={this.handleTitleChange}
              value={this.state.title}
              className="list-title"
              style={{ height: "45px" }}
            ></textarea>
            <p>
              in list <a className="link">Stuff to try (this is a list)</a>
              <i className="sub-icon sm-icon"></i>
            </p>
          </header>
          <section className="modal-main">
            <ul className="modal-outer-list">
              <li className="details-section">
                <ul className="modal-details-list">
                  <li className="labels-section">
                    <h3>Labels</h3>
                    {labels}
                    <div className="member-container">
                      <i className="plus-icon sm-icon"></i>
                    </div>
                  </li>
                  <li className="due-date-section">
                    <h3>Due Date</h3>
                    <div id="dueDateDisplay" className="overdue completed">
                      <input
                        id="dueDateCheckbox"
                        type="checkbox"
                        className="checkbox"
                        checked=""
                      />
                      {card.due_date} <span>(past due)</span>
                    </div>
                  </li>
                </ul>
                <CardDescriptionContainer
                  cardId={card.id}
                  description={card.description}
                  onSubmit={this.props.onSubmit}
                />
              </li>
              <AddCommentFormContainer cardId={card.id} />
              <li className="activity-section">
                <h2 className="activity-icon icon">Activity</h2>
                <ul className="horiz-list">
                  <li className="not-implemented">Show Details</li>
                </ul>
                <ul className="modal-activity-list">{comments}</ul>
              </li>
            </ul>
          </section>
          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button">
                <i className="person-icon sm-icon"></i>Members
              </li>
              <li className="label-button">
                <i className="label-icon sm-icon"></i>Labels
              </li>
              <li className="checklist-button">
                <i className="checklist-icon sm-icon"></i>Checklist
              </li>
              <li className="date-button not-implemented">
                <i className="clock-icon sm-icon"></i>Due Date
              </li>
              <li className="attachment-button not-implemented">
                <i className="attachment-icon sm-icon"></i>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button">
                <i className="forward-icon sm-icon"></i>Move
              </li>
              <li className="copy-button">
                <i className="card-icon sm-icon"></i>Copy
              </li>
              <li className="subscribe-button">
                <i className="sub-icon sm-icon"></i>Subscribe
                <i className="check-icon sm-icon"></i>
              </li>
              <hr />
              <li
                className="archive-button"
                onClick={this.handleToggleArchived}
              >
                <i className="file-icon sm-icon"></i>
                Archive
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Share and more...</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

export default CardModal;
