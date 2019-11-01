import React, { Component } from "react";
import AddListForm from "./AddListForm";
import { connect } from "react-redux";
import { createList } from "../../actions/ListActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (title, callback) => {
      dispatch(createList({ title: title }, ownProps.boardId, callback));
    }
  };
};

class AddListContainer extends Component {
  render() {
    return <AddListForm onSubmit={this.props.onSubmit} />;
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddListContainer);
