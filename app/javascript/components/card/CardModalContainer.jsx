import React, { Component } from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import { fetchCard, updateCard } from "../../actions/cardActions";

const mapStateToProps = (state, ownProps) => {
  const cardId = +ownProps.match.params.id;
  const currentCardModal = state.cards.find(card => {
    return card.id === cardId;
  });

  if (!currentCardModal) {
    return { card: null };
  }

  const comments = state.comments.filter(comment => {
    return comment.card_id === cardId;
  });

  return {
    card: currentCardModal,
    comments
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const cardId = +ownProps.match.params.id;
  return {
    onFetchCard: () => {
      dispatch(fetchCard(cardId));
    },
    onUpdateCard: (data, callback) => {
      dispatch(updateCard(cardId, data, callback));
    }
  };
};

class CardModalContainer extends Component {
  componentDidMount() {
    this.props.onFetchCard();
  }

  render() {
    if (this.props.card) {
      return (
        <CardModal
          card={this.props.card}
          onSubmit={this.props.onUpdateCard}
          comments={this.props.comments}
        />
      );
    } else {
      return null;
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardModalContainer);
