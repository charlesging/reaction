import React, { Component } from "react";
import { connect } from "react-redux";
import List from "../list/List";
import AddListContainer from "../board/AddListContainer";
import { updateList } from "../../actions/ListActions";

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists.filter(list => {
      return list.board_id === ownProps.boardId;
    })
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleTitleChange: (listId, newTitle) => {
      dispatch(updateList(listId, { title: newTitle }));
    }
  };
};

class ListContainer extends Component {
  render() {
    const lists = this.props.lists.map(list => {
      return (
        <List
          key={list.id}
          list={list}
          onSubmit={this.props.handleTitleChange}
        />
      );
    });

    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists}
        </div>
        <AddListContainer boardId={this.props.boardId} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
