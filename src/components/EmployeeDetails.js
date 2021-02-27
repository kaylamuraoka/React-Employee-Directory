import React from "react";

function EmployeeDetails(props) {
  return (
    <tbody>
      {props.employees.map((employee, index) => (
        <tr key={employee.id.value}>
          <td>{index + 1}</td>
          <td>
            <img src={employee.picture.medium} alt={employee.name.first}></img>
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.gender}</td>
          <td>{employee.dob.age}</td>
          <td>
            <a href={"tel:" + employee.phone}>{employee.phone}</a>
          </td>
          <td>
            <a href={"mailto:" + employee.email}>{employee.email}</a>
          </td>
          <td>
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "http://maps.google.com/?q=" +
                employee.location.street.number +
                employee.location.street.name +
                " " +
                employee.location.city +
                ", " +
                employee.location.state +
                " " +
                employee.location.postcode
              }
            >
              {employee.location.street.number} {employee.location.street.name}{" "}
              {employee.location.city}, {employee.location.state}{" "}
              {employee.location.postcode}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default EmployeeDetails;
