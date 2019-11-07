import React, { Component } from "react";

class AddCommentForm extends Component {
  state = {
    text: ""
  };

  handleTextChange = e => this.setState({ text: e.target.value });
  handleAdd = () => {
    this.props.handleCreateComment(this.state.text, () => {
      this.setState({ text: "" });
    });
  };

  render() {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                value={this.state.text}
                onChange={this.handleTextChange}
                required=""
                rows="1"
                placeholder="Write a comment..."
              ></textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input
                  type="submit"
                  className="button implemented"
                  value="Save"
                  disabled={!this.state.text}
                  onSubmit={this.handleAdd}
                />
              </div>
            </label>
          </div>
        </div>
      </li>
    );
  }
}

export default AddCommentForm;
