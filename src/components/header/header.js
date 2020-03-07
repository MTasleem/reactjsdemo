import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./header.css";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.changeStatus = this.changeStatus.bind(this);
    // this.openNav = this.openNav.bind(this);
    // this.closeNav = this.closeNav.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <div className="topNav">
          <div className="container ">
            <div className="row">
              <div className="col-sm logoDiv">
                <div className="logo">
                  <Link to={"/home"}>
                    <img src={require("../../images/01-home/u50.png")} />
                  </Link>
                </div>
              </div>
              <div className="col-sm"></div>
              <div className="col-sm midDiv">
                <div className="headerText">
                  <span
                    style={{ textDecoration: "none" }}
                    className="headerTag"
                  >
                    Innovation for wellbeing
                  </span>
                </div>
              </div>
              <div className="headerNavContent ">
                <button onClick={this.changeStatus} className="navLoginButton">
                  Sign In
                </button>
              </div>
              <div className="col toggleBar">
                <div>
                  <img
                    onClick={this.openNav}
                    className="toggleImage"
                    src="../../assets/images/01-home/u51.svg"
                  />
                  <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={this.closeNav}>
                      &times;
                    </a>
                    <a href="#">Travel Insurance Products</a>
                    <a href="#">Customer Support</a>
                    <a href="#">Claims</a>
                    <a href="#">FAQS</a>

                    <button
                      onClick={this.changeStatus}
                      className="mobnavLoginButton"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerNav">
          <div className="container ">
            <div className="row">
              <div className="col-sm-7 headerNavContent">
                <ul>
                  <li>
                    <a href="#" className="navHeading">
                      Travel Insurance Products{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navHeading">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navHeading">
                      Claims
                    </a>
                  </li>
                  <li>
                    <a href="#" className="navHeading">
                      FAQS
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3  headerNavContent">
                <div className="search">
                  <input
                    type="text"
                    className="searchBox"
                    placeholder="Search"
                  />
                  <img
                    src={require("../../images/01-home/u83.svg")}
                    className="searchIcon"
                  />
                </div>
              </div>
              <div className="col-sm-2 headerNavContent ">
                <button className="navButton">Business Partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default header;
