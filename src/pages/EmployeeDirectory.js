import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Table from "../components/Table";

function EmployeeDirectory() {
  return (
    <Container>
      <h1 className="text-center">Employee Directory</h1>
      <hr />
      <p className="text-center">
        This employee directory is populated with randomly generated users via
        an API call to the Random User API. This API simply generates random
        user data (shown below). You may search for specific employees via the
        search field, sort a field (Name, Email, DOB) in ascending or descending
        order.
      </p>
      <Row>
        <Col size="col-12">
          <Table />
        </Col>
      </Row>
    </Container>
  );
}
export default EmployeeDirectory;
