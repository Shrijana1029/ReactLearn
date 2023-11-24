import React, { useState } from "react";

export default function TextFile(props) {
  const [text, setText] = useState();
  const handleOnClick = () => {
    console.log("BUtton Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick1 = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Cant change");
    // lekhna pauxa text space ma
    setText(event.target.value);
  };
  const myStyle = {
    color : "white",
    backgroundColor : "black"
  }
  

  return (
    <>
    <div className="container" style={myStyle}>
    <label for="exampleFormControlTextarea1" className="form-label" >
        {props.topicName}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Write here!!"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <br />
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={handleOnClick}
      >
        Submit for uppercase
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleOnClick1}
      >
        Submit for lowercase
      </button>
      
    </div>
      

    </>
  );
}
