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

  const actions = state.actions
    .filter(action => {
      return action.card_id === cardId;
    })
    .map(action => ({ ...action, isAction: true }));

  const commentsAndActions = [...comments, ...actions];

  return {
    card: currentCardModal,
    commentsAndActions: commentsAndActions
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
          commentsAndActions={this.props.commentsAndActions}
          onUpdate={this.props.onUpdateCard}
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
