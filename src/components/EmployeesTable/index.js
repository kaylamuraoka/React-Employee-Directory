import React from "react";
import "./style.css";
import { FiSearch, FiRefreshCcw, FiFilter } from "react-icons/fi";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import Row from "../Row";
import Column from "../Column";

function EmployeesTable(props) {
  return (
    <div>
      <Row>
        <Column size="sm-7"></Column>
        <Column size="sm-5">
          <div class="button-area">
            <div className="input-icons">
              <IconContext.Provider
                value={{
                  color: "grey",
                  className: "icon",
                }}
              >
                <i>
                  <FiSearch />
                </i>
              </IconContext.Provider>
              <input
                value={props.search}
                className="input-field"
                type="text"
                onChange={props.filterTable}
                placeholder="Search.."
              ></input>
            </div>

            <IconContext.Provider
              value={{
                color: "grey",
                className: "button-icon",
              }}
            >
              <button
                className="icon-button"
                onClick={props.refreshTableFunction}
              >
                <FiRefreshCcw />
                Refresh
              </button>
            </IconContext.Provider>

            <div className="dropdown">
              <IconContext.Provider
                value={{
                  color: "grey",
                  className: "button-icon",
                }}
              >
                <button className="dropdown-button">
                  <FiFilter />
                  Filter
                </button>
              </IconContext.Provider>
              <div class="dropdown-content">
                <li onClick={props.genderFilterMale}>Male</li>
                <li onClick={props.genderFilterFemale}>Female</li>
              </div>
            </div>
          </div>
        </Column>
      </Row>

      {props.matchedEmployees.length > 0 ? (
        <p>{props.matchedEmployees.length} Matches Found.</p>
      ) : null}

      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col" onClick={props.sortName}>
              Name
              {props.nameSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
            <th scope="col" onClick={props.sortGender}>
              Gender
              {props.genderSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
            <th scope="col" onClick={props.sortAge}>
              Age
              {props.ageSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
            <th scope="col" onClick={props.sortPhone}>
              Phone
              {props.phoneSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
            <th scope="col" onClick={props.sortEmail}>
              Email
              {props.emailSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
            <th scope="col" onClick={props.sortAddress}>
              Address
              {props.addressSort === "ascending" ? (
                <FaSortDown className="sort-icon" />
              ) : (
                <FaSortUp className="sort-icon" />
              )}
            </th>
          </tr>
        </thead>

        {props.matchedEmployees.length > 0 ? (
          <tbody>
            {props.matchedEmployees.map((employee, index) => (
              <tr key={"row-" + index}>
                <td className="index-column">{index + 1}</td>
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
        ) : (
          <tbody>
            {props.employees.map((employee, index) => (
              <tr key={"row-" + index}>
                <td className="index-column">{index + 1}</td>
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
        )}
      </table>
    </div>
  );
}
export default EmployeesTable;
