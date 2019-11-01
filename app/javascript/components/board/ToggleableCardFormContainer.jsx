import { connect } from "react-redux";
import { createCard } from "../../actions/CardActions";
import ToggleableCardForm from "./ToggleableCardForm";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (title, callback) => {
      dispatch(createCard({ title: title }, ownProps.list.id, callback));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ToggleableCardForm);
