import React, { Component } from "react";
import "./trustedworldwide.css";

class TrustedWorldWide extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

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
        <div className="container">
          <div className="text-center">Trusted by millions of drivers worldwide</div>
          <div className="img img-responsive">
            <ul className="image-block d-flex justify-content-between">
              <li className="small-blocks"><img src={require("../../images/motor/laptop_1.jpg")}/></li>
              <li className="small-blocks"><img src={require("../../images/motor/laptop_2.jpg")}/></li>
              <li className="small-blocks"><img src={require("../../images/motor/laptop_3.jpg")}/></li>
              <li className="small-blocks"><img src={require("../../images/motor/laptop_2.jpg")}/></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TrustedWorldWide;
