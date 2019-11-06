import React, { Component } from "react";
import CardDescription from "./CardDescription";

class CardDescriptionContainer extends Component {
  state = {
    description: this.props.description || "",
    descriptionFormVisible: false
  };

  handleToggleDescriptionForm = e => {
    this.setState(prevState => {
      return { descriptionFormVisible: !prevState.descriptionFormVisible };
    });
  };

  render() {
    return (
      <CardDescription
        onToggleDescriptionForm={this.handleToggleDescriptionForm}
        description={this.props.description}
        descriptionFormVisible={this.state.descriptionFormVisible}
      />
    );
  }
}

export default CardDescriptionContainer;
