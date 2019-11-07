import React, { Component } from "react";
import { connect } from "react-redux";
import CardModal from "./CardModal";
import { fetchCard, updateCard } from "../../actions/cardActions";

const mapStateToProps = (state, ownProps) => {
  const currentCardModal = state.cards.find(card => {
    return card.id === +ownProps.match.params.id;
  });

  return {
    card: currentCardModal
    // list: (need list title inside card modal)
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
    },
    handleCreateComment: (data, callback) => {
      dispatch(createComment(cardId, data, callback));
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
          onAddComment={this.props.handleCreateComment}
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
