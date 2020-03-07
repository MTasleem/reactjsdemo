import React, { Component } from "react";
import "./upload.css";
import axios from "axios";

class upload extends Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      selectedFile: null
    };
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler() {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:4000/companies/upload", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  }
  render() {
    return (
      <div className="container" style={{ padding: "20px" }}>
        <div className="row">
          <div className="col-md-6">
            <form method="post" action="#" id="#">
              <div className="form-group files">
                <input
                  type="file"
                  className="form-control"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={this.onClickHandler}
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default upload;
