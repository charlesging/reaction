import React from "react";
import moment from "moment";

const Action = ({ created_at, description }) => {
  return (
    <li>
      <div class="member-container">
        <div class="card-member small-size">VR</div>
      </div>
      <p>
        <span class="member-name">RedPoint</span> {description}
        <small>{moment(created_at).fromNow()}</small>
      </p>
    </li>
  );
};

export default Action;
