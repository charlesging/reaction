import React, { Component } from "react";
import CardDescription from "./CardDescription";
import connect from "react-router-dom";

class CardDescriptionContainer extends Component {
  state = {
    description: this.props.description || "",
    formVisible: false
  };

  handleToggleForm = e => {
    this.setState(prevState => {
      return { formVisible: !prevState.formVisible };
    });
  };

  handleCloseForm = () => {
    this.handleToggleForm();
    this.setState({ description: this.props.description });
  };

  handleChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = e => {
    this.props.onSubmit(
      { description: this.state.description },
      ({ description }) => {
        this.setState({ description });
        this.handleToggleForm();
      }
    );
  };

  render() {
    return (
      <CardDescription
        onToggleForm={this.handleToggleForm}
        description={this.state.description}
        onChange={this.handleChange}
        formVisible={this.state.formVisible}
        onSubmit={this.handleSubmit}
        onCloseForm={this.handleCloseForm}
      />
    );
  }
}

export default CardDescriptionContainer;
