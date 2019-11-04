import React, { Component } from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";

const mapStateToProps = (state, ownProps) => {
  const currentCardModal = state.cards.find(card => {
    return card.id === +ownProps.match.params.id;
  });

  return {
    card: currentCardModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchCard: () => {
      dispatch(fetchCard(+ownProps.match.params.id));
    }
  };
};

class CardModalContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    if (this.props.card) {
      return <CardModal card={this.props.card} />;
    } else {
      return <h1>No Card Found</h1>;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardModalContainer);
