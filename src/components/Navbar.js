import React from "react";
import { useState } from "react";
export default function Navbar() {
 const [Mytext, setMyText] = useState("Enter any text");
  const [mystate, setMystate] = useState("Dark mode");
  const [Mystyle, setMyStyle] = useState({
    position: "absolute",
    right: "0px",
    top: "17px",
  });
  const [bodystyle, setbodystyle] = useState({});
  function togglecolor() {
   
    if(mystate==="Dark Mode")
    {
        setMystate("Light Mode");
        setbodystyle({
            backgroundColor:"white",
            color:"black"
        });
    }
    else
    {
        setbodystyle({
            backgroundColor:"black",
            color:"white"
        })
        setMystate("Dark Mode");

    }
  }
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
    <div style={bodystyle}>
      <div className="container" >
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container-fluid" >
            <a className="navbar-brand" href="/">
              TextUtils
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact us
                  </a>
                </li>
                <li className="form-check form-switch" style={Mystyle}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onClick={togglecolor}
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckDefault"
                  >
                    {mystate}
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
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
