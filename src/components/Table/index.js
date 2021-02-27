import React, { Component } from "react";
import EmployeeDetails from "../EmployeeDetails";
import API from "../../utils/API";
import "./style.css";

import { FaSortDown, FaSortUp } from "react-icons/fa";

class Table extends Component {
  state = {
    employees: [],
  };

  // When this component mounts, search the Random User API
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <table className="table table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <EmployeeDetails employees={this.state.employees} />
      </table>
    );
  }
}

export default Table;
