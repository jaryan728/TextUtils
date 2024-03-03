import React, { useState } from "react";

export default function Text() {
  const [Mytext, setMyText] = useState("Enter any text");
  const [mystyle, setMyStyle] = useState({});
  function changetext(event) {
    setMyText(event.target.value);
  }
  function clearit(params) {
    setMyText("");
  }
  function textupper() {
    setMyText(Mytext.toUpperCase());
  }
  return (
    <div className="change" style={mystyle}>
      <div className="container">
        <div className="mb-3">
          <label for="exsampleFormControlTextarea1" className="form-label">
            <h1>Text analyzer</h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={Mytext}
            rows="8"
            onChange={changetext}
          ></textarea>
        </div>
        <button type="button" onClick={clearit} className="btn btn-primary">
          clear
        </button>
        <div>
          {" "}
          <button type="button" onClick={textupper} className="btn btn-primary">
            Uppercase
          </button>
        </div>
        <div>No. of character {Mytext.length}</div>
        <div>No. of words {Mytext.split(" ").length}</div>
        <p>{Mytext}</p>
      </div>
    </div>
  );
}
