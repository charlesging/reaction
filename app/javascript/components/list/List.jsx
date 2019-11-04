import React, { Component } from "react";
import CardsContainer from "./CardsContainer";
import ToggleableCardFormContainer from "./ToggleableCardFormContainer";

class List extends Component {
  state = {
    cardFormOpen: false,
    title: this.props.list.title
  };

  handleFormToggle = e => {
    this.setState(prevState => ({
      cardFormOpen: !prevState.cardFormOpen
    }));
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = e => {
    this.props.onSubmit(this.props.list.id, this.state.title);
  };

  render() {
    const divClass = this.state.cardFormOpen
      ? "list-wrapper add-dropdown-active"
      : "list-wrapper";

    return (
      <div className={divClass}>
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <input
                type="text"
                className="list-title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                onBlur={this.handleSubmit}
                autofocus="true"
              />
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <CardsContainer list={this.props.list} />
            {this.state.cardFormOpen ? (
              <ToggleableCardFormContainer
                onFormToggle={this.handleFormToggle}
                list={this.props.list}
              />
            ) : null}
            <div
              onClick={this.handleFormToggle}
              className="add-card-toggle"
              data-position="bottom"
            >
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
