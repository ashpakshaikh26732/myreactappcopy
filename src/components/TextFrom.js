import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const clicked = () => {
    // console.log("button is clicked " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("text is converted to uppercase ", "success");
  };
  const changehasdone = (event) => {
    console.log("this is change ");
    setText(event.target.value);
  };
  const lowercase = () => {
    // console.log("button has been clicked " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("text is converted to lowercase ", "success");
  };
  const copy = () => {
    let newcopy = text.slice(0, text.length - 1);
  };
  const clear = () => {
    let newclear = text.replace(text, "");
    setText(newclear);
    props.showAlert("textarea is cleared ", "success");
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            itemID="textcontainer"
            value={text}
            onChange={changehasdone}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.settextcolr,
            }}
          ></textarea>
          <button className="btn btn-success mx-3 my-3" onClick={clicked}>
            Convert to uppercase
          </button>
          <button className="btn btn-success mx-3 my-3" onClick={lowercase}>
            Convert to lowercase
          </button>
          <button
            type="button"
            onClick={copy}
            class="btn btn-success mx-3 my-3"
          >
            copy
          </button>
          <button
            onClick={clear}
            type="button"
            class="btn btn-success mx-3 my-3"
          >
            clear
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h3>Your text summary </h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes requried to read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview it here "}</p>
      </div>
    </>
  );
}
TextFrom.prototype = {
  heading: PropTypes.string.isRequired,
};
TextFrom.defaultProps = {
  heading: "enter text here ",
};
