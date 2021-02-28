import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Table from "../components/EmployeesTable";

class EmployeeDirectory extends Component {
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

  render() {
    return (
      <div>
        <PageHeader
          backgroundImage="http://washingtongrantmakers.com/sites/default/files/corporate-training-programs-for-employees-blog-background-image.jpg"
          title="Employee Directory"
          subtitle="This employee directory is populated with randomly generated users via an API call to the Random User API. This API simply generates random user data (shown below)."
        ></PageHeader>
        <Container>
          <Table
            columns={[
              "Picture",
              "Name",
              "Gender",
              "Age",
              "Phone",
              "Email",
              "Address",
            ]}
            employees={this.state.employees}
          ></Table>
        </Container>
      </div>
    );
  }
}

export default EmployeeDirectory;
