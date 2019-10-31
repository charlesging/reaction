import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter(list => {
      return list.board_id === ownProps.boardId;
    })
  };
};

class ListContainer extends Component {
  render() {
    const lists = this.props.lists.map(list => {
      return <List key={list.id} list={list} />;
    });

    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists}
        </div>
        <AddListContainer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ListContainer);
