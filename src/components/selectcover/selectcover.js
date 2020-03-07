import React, { Component } from "react";
import "./selectcover.css";

class SelectCover extends Component {
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
      <div className="bg-color">
        <div className="container">
          <h1 className="text-center space-topbottom">Select Cover</h1>
          <div className="row">
            <div className="padd-60 background-shadow">
              <h2 className="text-center">Comprehensive Coverage</h2>
              <p className="font-weight-bold text-center">
                Cover for your car and damage you case to other people’s
                property
              </p>
              <div className="ul-blocks">
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Cover for accidental damage to your car if you are at fault
                </div>
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Cover for accidental damage to other people’s property
                  (including vehicles) which is partly or fully your fault
                </div>
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Damage to your car if you are not at fault in an accident and
                  the other vehicle is uninsured
                </div>
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Reasonable costs of towing after a covered accident
                </div>
              </div>
              <div class="getQuotes text-center">
                <button className="btn btn-success"> Get a Quote</button>
              </div>
            </div>
            <div className="padd-60 background-shadow">
              <h2 className="text-center">Third Party Coverage</h2>
              <p className="font-weight-bold text-center">
                Cover only for damage you cause to other people’s property
              </p>
              <div className="ul-blocks">
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Covers you for damage that you cause to other people's
                  vehicles and property only.
                </div>
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Approved legal costs arising out of a claim for liability
                  covered by your policy
                </div>
                <div>
                  <span>
                    <img src={require("../../images/motor/tick.PNG")} />
                  </span>
                  Nunc pellentesque dapibus lorem ipsum dolor sit amet
                  consectetur adipiscing et nunc
                </div>
              </div>
              <div class="getQuotes text-center">
                <button className="btn btn-success"> Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCover;
