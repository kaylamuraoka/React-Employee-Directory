import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import EmployeesTable from "../components/EmployeesTable";

class EmployeeDirectory extends Component {
  state = {
    search: "",
    employees: [],
    nameSort: "ascending",
    genderSort: "ascending",
    ageSort: "ascending",
    phoneSort: "ascending",
    emailSort: "ascending",
    addressSort: "ascending",
    matchedEmployees: [],
  };

  // When this component mounts, search the Random User API
  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        const results = res.data.results;
        const employeeArray = [];
        for (let i = 0; i < results.length; i++) {
          const row = {
            picture: results[i].picture.medium,
            name: `${results[i].name.first} ${results[i].name.last}`,
            gender: results[i].gender,
            age: results[i].dob.age,
            phone: results[i].phone,
            email: results[i].email,
            address: `${results[i].location.street.number} ${results[i].location.street.name}. ${results[i].location.city}, ${results[i].location.state} ${results[i].location.postcode}`,
          };
          employeeArray.push(row);
        }
        console.log(employeeArray);

        this.setState({
          employees: employeeArray,
        });
      })
      .catch((err) => console.log(err));
  };

  sortName = () => {
    if (this.state.nameSort === "ascending") {
      console.log("descending name sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        nameSort: "descending",
      });
    } else {
      console.log("ascending name sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        nameSort: "ascending",
      });
    }
  };

  sortGender = () => {
    if (this.state.genderSort === "ascending") {
      console.log("descending gender sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.gender > b.gender) {
          return -1;
        }
        if (a.gender < b.gender) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        genderSort: "descending",
      });
    } else {
      console.log("ascending gender sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.gender < b.gender) {
          return -1;
        }
        if (a.gender > b.gender) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        genderSort: "ascending",
      });
    }
  };

  sortAge = () => {
    if (this.state.ageSort === "ascending") {
      console.log("descending age sort clicked");
      let employees = this.state.employees.sort((a, b) => b.age - a.age);
      this.setState({
        employees: employees,
        ageSort: "descending",
      });
    } else {
      console.log("ascending age sort clicked");
      let employees = this.state.employees.sort((a, b) => a.age - b.age);
      this.setState({
        employees: employees,
        ageSort: "ascending",
      });
    }
  };

  sortPhone = () => {
    if (this.state.phoneSort === "ascending") {
      console.log("descending phone sort clicked");
      let employees = this.state.employees.sort(
        (a, b) => b.phone.replace(/[()-]/g, "") - a.phone.replace(/[()-]/g, "")
      );
      this.setState({
        employees: employees,
        phoneSort: "descending",
      });
    } else {
      console.log("ascending phone sort clicked");
      let employees = this.state.employees.sort(
        (a, b) => a.phone.replace(/[()-]/g, "") - b.phone.replace(/[()-]/g, "")
      );
      this.setState({
        employees: employees,
        phoneSort: "ascending",
      });
    }
  };

  sortEmail = () => {
    if (this.state.emailSort === "ascending") {
      console.log("descending email sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.email > b.email) {
          return -1;
        }
        if (a.email < b.email) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        emailSort: "descending",
      });
    } else {
      console.log("ascending email sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        emailSort: "ascending",
      });
    }
  };

  sortAddress = () => {
    if (this.state.addressSort === "ascending") {
      console.log("descending address sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.address > b.address) {
          return -1;
        }
        if (a.address < b.address) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        addressSort: "descending",
      });
    } else {
      console.log("ascending address sort clicked");
      let employees = this.state.employees.sort((a, b) => {
        if (a.address < b.address) {
          return -1;
        }
        if (a.address > b.address) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: employees,
        addressSort: "ascending",
      });
    }
  };

  genderFilterMale = () => {
    console.log("male filter clicked");
    if (this.state.employees.length < 20) {
      this.getEmployees();
      let maleEmployees = this.state.employees.filter(
        (employee) => employee.gender === "male"
      );
      console.log(maleEmployees);
      this.setState({
        employees: maleEmployees,
      });
    }
    let maleEmployees = this.state.employees.filter(
      (employee) => employee.gender === "male"
    );
    console.log(maleEmployees);
    this.setState({
      employees: maleEmployees,
    });
  };

  genderFilterFemale = () => {
    console.log("female filter clicked");
    let femaleEmployees = [];
    if (this.state.employees.length < 20) {
      this.getEmployees();
      femaleEmployees = this.state.employees.filter(
        (employee) => employee.gender === "female"
      );
      console.log(femaleEmployees);
      this.setState({
        employees: femaleEmployees,
      });
    }
    femaleEmployees = this.state.employees.filter(
      (employee) => employee.gender === "female"
    );
    console.log(femaleEmployees);
    this.setState({
      employees: femaleEmployees,
    });
  };

  handleInputChange = (event) => {
    console.log("Filtering table according to input");
    console.log(event.target.value.toLowerCase());
    this.setState({
      search: event.target.value.toLowerCase(),
    });

    if (event.target.value.length === 0) {
      this.setState({
        matchedEmployees: [],
      });
    }

    const matchedEmployees = [];
    for (let i = 0; i < this.state.employees.length; i++) {
      let name = this.state.employees[i].name.toLowerCase();
      let email = this.state.employees[i].email;
      let address = this.state.employees[i].address;
      if (
        (!this.state.search === "" && name.includes(this.state.search)) ||
        email.includes(this.state.search) ||
        address.includes(this.state.search)
      ) {
        matchedEmployees.push(this.state.employees[i]);
      }
    }
    console.log(matchedEmployees);
    this.setState({
      matchedEmployees: matchedEmployees,
    });
  };

  refreshTable = () => {
    console.log("Employee Directory has been refreshed");
    this.getEmployees();
  };

  render() {
    return (
      <div>
        <PageHeader
          backgroundImage="http://washingtongrantmakers.com/sites/default/files/corporate-training-programs-for-employees-blog-background-image.jpg"
          title="Employee Directory"
          subtitle="This employee directory is populated with randomly generated users via an API call to the Random User API. This API simply generates random user data (shown below)."
        ></PageHeader>
        <Container>
          <EmployeesTable
            search={this.state.search}
            filterTable={this.handleInputChange}
            genderFilterMale={this.genderFilterMale}
            genderFilterFemale={this.genderFilterFemale}
            employees={this.state.employees}
            matchedEmployees={this.state.matchedEmployees}
            refreshTableFunction={this.refreshTable}
            nameSort={this.state.nameSort}
            genderSort={this.state.genderSort}
            ageSort={this.state.ageSort}
            phoneSort={this.state.phoneSort}
            emailSort={this.state.emailSort}
            addressSort={this.state.addressSort}
            sortName={this.sortName}
            sortAge={this.sortAge}
            sortPhone={this.sortPhone}
            sortEmail={this.sortEmail}
            sortAddress={this.sortAddress}
            sortGender={this.sortGender}
          ></EmployeesTable>
        </Container>
      </div>
    );
  }
}

export default EmployeeDirectory;
