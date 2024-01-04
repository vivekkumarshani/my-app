import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UPPERCASE Was clicked");
    let newtxt = text.toUpperCase();
    setText(newtxt);
    props.showAlert("converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    console.log("UPPERCASE Was clicked");
    let newtxt = text.toLowerCase();
    setText(newtxt);
    props.showAlert("converted to Lowercase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const handleCopytext = () => {
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "success");
  };

  const handleExtraSpace = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert("Extra space  has been removed", "success");
  };

  const handleOnChnage = (event) => {
    console.log("The text has changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "new text"; Wrong way to change the state
  //  setTest ="new Text"; Right way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopytext}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Extra Space
        </button>
      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charectors
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above tp preview it here"}
        </p>
      </div>
    </>
  );
}
