import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
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
        <div className="footer">
          <div className="footerDiv container">
            <div className="row ">
              <div className="col-5 footerColumn">
                <div className="footerHeading">LINKS</div>
                <div className="footerContent">
                  <div className="row">
                    <div className="col">
                      <a href="#">Personal Insurance</a>
                    </div>
                    <div className="col">
                      <a href="#">Claims</a>
                    </div>
                  </div>
                  <div>
                    <a href="#">Commercial Insurance</a>
                  </div>
                  <div>
                    <a href="#">About Us</a>
                  </div>
                </div>
              </div>
              <div className="col-4 footerColumn">
                <div className="footerHeading">CONTACT US</div>
                <div className="footerContent ">
                  <div className="mobNum row">
                    <div className="col-1">
                      <img src={require("../../images/01-home/u102.svg")} />
                    </div>
                    <div className="col">+65 1212 9900</div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <img src={require("../../images/01-home/u116.svg")} />
                    </div>
                    <div className="col">emailus@XYZ.com</div>
                  </div>
                </div>
              </div>
              <div className="col footerColumn3">
                <div className="footerHeading">LOCATE US</div>
                <div className="footerAddress row">
                  <div className="col-1">
                    <img src={require("../../images/01-home/u105.svg")} />
                  </div>
                  <div className="col">
                    <span className="addressHeading">XYZ (Asia) Pte. Ltd.</span>{" "}
                    <br />
                    50 Firas Place
                    <br />
                    #11-03, ABC Towers,
                    <br />
                    Singapore 011223
                    <div className="row socialIconMob">
                      <div className="col-3"></div>
                      <div className="col-3">
                        <img
                          src={require("../../images/01-home/u107.svg")}
                          className="socialLinks"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={require("../../images/01-home/u108.svg")}
                          className="socialLinks"
                        />
                      </div>
                      <div className="col-3">
                        <img
                          src={require("../../images/01-home/u109.svg")}
                          className="socialLinks"
                        />
                      </div>
                      <div className="col-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row footerLogos">
              <div className="col companyLogo">
                <img src={require("../../images/01-home/u110.png")} />
              </div>
              <div className="col socialLogo">
                <img
                  src={require("../../images/01-home/u107.svg")}
                  className="socialLinks"
                />
                <img
                  src={require("../../images/01-home/u108.svg")}
                  className="socialLinks"
                />
                <img
                  src={require("../../images/01-home/u109.svg")}
                  className="socialLinks"
                />
              </div>
            </div>
          </div>

          <div className="footerBottom ">
            <div className="container">
              <div className="row">
                <div className=" col-6 terms">
                  <span className="termsContent">Terms and conditions</span> |
                  <span className="copyContent"> Privacy Policy </span>
                </div>
                <div className="col-6 copyright">
                  <span>Copyright © XYZ (Asia) Pte. Ltd.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
