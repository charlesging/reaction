import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state.cards.filter(card => {
      return card.list_id === ownProps.list.id;
    })
  };
};

class CardsContainer extends Component {
  render() {
    const cards = this.props.cards.map(card => {
      return <Card key={card.id} card={card} />;
    });

    return (
      <div id="cards-container" data-id={`list-${this.props.list.id}-cards`}>
        {cards}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(CardsContainer);
