import React, { Component } from "react";
import "./qoute-form.css";
import Axios from "axios";

class QouteForm extends Component {
  constructor(props) {
    super(props);

    this.departureChange = this.departureChange.bind(this);
    this.returnedChange = this.returnedChange.bind(this);
    this.setCountriesChange = this.setCountriesChange.bind(this);
    this.typeOfTrips = this.typeOfTrips.bind(this);
    this.travllerAgeChange = this.travllerAgeChange.bind(this);
    this.promoChange = this.promoChange.bind(this);
    this.qouteFormData = this.qouteFormData.bind(this);

    this.state = {
      departure: "",
      returned: "",
      selectedCountry: "",
      typeOfTrips: "",
      travllerAge: "",
      promoCode: ""
    };
  }

  // componentWillMount(){}
  // componentDidMount(){
  //   Axios.post('')
  // }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  getCountry = () => {
    let arr = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua",
      "Argentina",
      "Armenia",
      "Australia"
    ];
    let countriesArr = [];
    arr.forEach((country, index) => {
      countriesArr.push(
        <option key={index} value={country}>
          {country}
        </option>
      );
    });
    return countriesArr;
  };

  typeOfTrip() {
    let trips = ["Single Trip", "Annual Multi-Trip", "test"];
    let tripsArr = [];
    trips.forEach((trip, index) => {
      tripsArr.push(
        <option key={index} value={trip}>
          {trip}
        </option>
      );
    });
    return tripsArr;
  }

  departureChange(e) {
    this.setState({
      departure: e.target.value
    });
  }
  setCountriesChange(e) {
    this.setState({
      selectedCountry: e.target.value
    });
  }

  returnedChange = e => {
    this.setState({
      returned: e.target.value
    });
  };

  typeOfTrips = e => {
    this.setState({
      typeOfTrips: e.target.value
    });
  };

  travllerAgeChange = e => {
    this.setState({
      travllerAge: e.target.value
    });
  };
  promoChange = e => {
    this.setState({
      promoCode: e.target.value
    });
  };

  qouteFormData = e => {
    e.preventDefault();
    let obj = {
      typeOfTrips: this.state.typeOfTrips,
      selectedCountry: this.state.selectedCountry,
      travllerAge: this.state.travllerAge,
      promoCode: this.state.promoCode,
      returned: this.state.returned,
      departure: this.state.departure
    };
    console.log(obj);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.qouteFormData}>
          <div className="form container">
            <div className="row">
              <span className="selectlabel"> Type of Policy </span>
            </div>
            <div className="row">
              <select className="dropdown" onChange={this.typeOfTrips}>
                {/* <option disabled selected>
                  Select Type of Trip
                </option> */}
                {this.typeOfTrip()}
              </select>
            </div>

            <div className="row">
              <div className="countrySelector">
                <div className="container">
                  <div className="row">
                    <select
                      className="multiselect"
                      onChange={this.setCountriesChange}
                    >
                      {/* <option disabled selected>
                        Select Country
                      </option> */}
                      {this.getCountry()}
                    </select>
                  </div>
                  <div className="row">
                    <span className="multiselectlabel"> Select Country </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row travelDate">
              <div className="datepick col">
                <div className="row">
                  <span className="dateselectlabel">Depart</span>
                </div>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="text"
                      placeholder="MM/DD/YYYY"
                      className="dateInput"
                      id="fromDate"
                      color="red"
                      value={this.state.departure}
                      onChange={this.departureChange}
                    />
                  </div>
                  <div className="col-3">
                    <img
                      src={require("../../images/01-home/u133.svg")}
                      className="datePickerLogo"
                    />
                  </div>
                </div>
              </div>
              <div className="datepick col col2">
                <div className="row">
                  <span className="dateselectlabel">Return</span>
                </div>
                <div className="row">
                  <div className="col-9">
                    <input
                      type="text"
                      placeholder="MM/DD/YYYY"
                      className="dateInput"
                      id="toDate"
                      color="red"
                      value={this.state.returned}
                      onChange={this.returnedChange}
                    />
                  </div>
                  <div className="col-3">
                    <img
                      src={require("../../images/01-home/u133.svg")}
                      className="datePickerLogo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row travelAges">
              <div className="inputpick col">
                <div className="row">
                  <span className="selectinputlabel">Traveller Ages </span>
                </div>
                <div className="row">
                  <input
                    type="text"
                    className="textInput"
                    color="red"
                    value={this.state.travllerAge}
                    onChange={this.travllerAgeChange}
                  />
                </div>
              </div>
              <div className="inputpick col col2">
                <div className="row">
                  <span className="selectinputlabel">Promotion Code </span>
                </div>
                <div className="row">
                  <input
                    type="text"
                    className="textInput"
                    color="red"
                    placeholder="Enter code here"
                    value={this.state.promoCode}
                    onChange={this.promoChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <button className="quoteButton">Get Quote</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QouteForm;
