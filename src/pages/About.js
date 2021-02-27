import React from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";

function About() {
  return (
    <div>
      <Banner backgroundImage="https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/2017/06/WorkplaceHeader.jpg">
        <h1>About This App</h1>
        <hr />
        <Container>
          <p style={{ color: "white" }}>
            This React app gives business professionals the ability to access
            non-sensitive data about their employees, and easily search, filter,
            and sort through their entire directory.
          </p>
        </Container>
        <button className="btn mt-3">
          <a href="/employee-directory">View Employee Directory</a>
        </button>
      </Banner>
    </div>
  );
}
export default About;
