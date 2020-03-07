import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// import FormData from "./components/form";
import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Upload from "./components/upload/upload";
import login from "./components/login/login";

// const MyContext = React.createContext("Motor");
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderWidhtMargin: 0,
      showOpenButton: true,
      LOB: "Motor"
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav = e => {
    this.setState({
      sliderWidhtMargin: 250,
      showOpenButton: false
    });
  };

  componentDidMount() {
    let obj = {};
    obj["testdata"] = "reactjs";
    // this.props.match['params'] = obj;
    console.log(this.state);
    // let data = this.props.match.params;
    // this.setState({
    //   LOB: data
    // });
  }

  closeNav = e => {
    this.setState({
      sliderWidhtMargin: 0,
      showOpenButton: true
    });
  };

  render() {
    return (
      <Router>
        <div>
          <div
            id="mySidenav"
            className="sidenav"
            style={{
              width: this.state.sliderWidhtMargin + "px"
            }}
          >
            <a className="closebtn" onClick={this.closeNav}>
              &times;
            </a>
            {/* <ul className="leftSlider">
              <li>
                <Link to={"/login"}>Login</Link>
                <span className="sr-only">(current)</span>
              </li>
              <li>
                <Link to={"/signup"}>Signup</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>Contact</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/dashboardfinal"}>Dashboard</Link>
              </li>
            </ul> */}
          </div>

          <div
            id="main"
            style={{
              marginLeft: this.state.sliderWidhtMargin + "px"
            }}
          >
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={this.openNav}
              className="closeIcon"
            >
              {this.state.showOpenButton ? <span>&#9776;</span> : false}
            </span>
            <Header></Header>
            <Switch>
              <Redirect exact from="/" to="Home" LOB={this.state}/>

              <Route path="/home" component={Home} />
              <Route path="/upload" component={Upload} />
              <Route path="/login" component={login} />
              {/* <Route path="/signup" component={Signup} />
              <Route path="/edit/:id" component={Edit} />
              <Route path="/editDashboard/:id" component={EditableComponent} />
              <Route path="/index" component={Index} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/dashboardfinal" component={DashboardFinal} /> */}
            </Switch>
            <Footer></Footer>
          </div>

          <br />

          {/* <div
            style={{
              marginTop: 30 + "px",
              marginLeft: this.state.sliderWidhtMargin - 110 + "px"
            }}
          >
            <Switch>
              <Redirect exact from="/" to="Login" />

               <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/edit/:id" component={Edit} />
              <Route path="/editDashboard/:id" component={EditableComponent} />
              <Route path="/index" component={Index} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/dashboardfinal" component={DashboardFinal} />
            </Switch>
          </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
