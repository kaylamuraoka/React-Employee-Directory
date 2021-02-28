import React from "react";
import "./style.css";

function EmployeesTable(props) {
  return (
    <div>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            {props.columns.map((column) => (
              <th scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
            <tr key={"row-" + index}>
              <td>{index + 1}</td>
              <td>
                <img src={employee.picture} alt={employee.name}></img>
              </td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.age}</td>
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
                  href={"http://maps.google.com/?q=" + employee.address}
                >
                  {employee.address}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeesTable;
