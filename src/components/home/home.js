import React, { Component } from "react";
import "./home.css";
import TrustedWorldWide from "../trustedworldwide/trustedworldwide";
import SelectCover from "../selectcover/selectcover";
// import QouteForm from "../qoute-form/qoute-form";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  componentDidMount() {
    // this.setState({
    //   LOB: this.props.LOB
    // });
    console.log(this.props);
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        {/* <TrustedWorldWide></TrustedWorldWide>
        <SelectCover></SelectCover> */}
        {/* <p>{this.props.LOB}</p> */}
        {/* <div className="coverImage">
          <div className="cover">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="homeText">
                    <h4 className="homeQuote">
                      Wherever you travel, pack some peace of mind.
                    </h4>
                    <h6 className="subQuote">Where are you going?</h6>
                    <div className="formContainer">
                      <QouteForm></QouteForm>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 banner">
                  <app-card className="bannerCard"></app-card>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;
