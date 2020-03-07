import React, { Component } from "react";
import "./login.css";
import Axios from "axios";

class login extends Component {
  constructor(props) {
    super(props);

    this.usernameLogin = this.usernameLogin.bind(this);
    this.passwordLogin = this.passwordLogin.bind(this);
    this.authentication = this.authentication.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  authentication = event => {
    event.preventDefault();
    let header = { headers: { "Content-Type": "application/json" } };
    let payload = "" || {};
    payload = {
      email: this.state.username,
      password: this.state.password
    };
    if (payload.email && payload.password && Object.keys(payload).length) {
      Axios.post(
        "http://localhost:4000/signup/user",
        payload,
        header
      ).then(res => console.log(res.data));
    }
  };

  usernameLogin = event => {
    this.setState({
      username: event.target.value
    });
  };
  passwordLogin = event => {
    this.setState({
      password: event.target.value
    });
  };

  // componentWillMount(){}
  // componentDidMount() {}
  // componentWillUnmount(){}
  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <hr />
          <div className="row">
            <div className="col-md-5">
              <form role="form" method="post" action="register.php">
                <fieldset>
                  <p className="text-uppercase pull-center">SIGN UP.</p>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control input-lg"
                      placeholder="username"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control input-lg"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control input-lg"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password2"
                      id="password2"
                      className="form-control input-lg"
                      placeholder="Password2"
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      By Clicking register you're agree to our policy & terms
                    </label>
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-lg btn-primary"
                      value="Register"
                    />
                  </div>
                </fieldset>
              </form>
            </div>

            <div className="col-md-2"></div>

            <div className="col-md-5">
              <form role="form">
                <fieldset>
                  <p className="text-uppercase">Login using your account:</p>

                  <div className="form-group">
                    <input
                      type="email"
                      name="username"
                      id="username"
                      className="form-control input-lg"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.usernameLogin}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control input-lg"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.passwordLogin}
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-md btn-primary"
                      value="Sign In"
                      onClick={this.authentication}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
