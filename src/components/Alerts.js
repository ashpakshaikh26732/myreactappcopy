import React from "react";
import PropTypes from "prop-types";

export default function Alerts(props) {
  const captial = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong> {captial(props.alert.type)}</strong> : {props.alert.message}
        {props.alert.message} 
      </div>
    )
  );
}
