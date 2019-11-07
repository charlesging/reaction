import React, { Component } from "react";
import { connect } from "react-redux";
import AddCommentForm from "./AddCommentForm";
import { createComment } from "../../actions/CommentActions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCreateComment: (data, callback) => {
      dispatch(createComment(ownProps.cardId, data, callback));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCommentForm);
