import React from "react";
import Banner from "../components/Banner";

function About() {
  return (
    <div>
      <Banner
        backgroundImage="https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/2017/06/WorkplaceHeader.jpg"
        title="About This App"
        subtitle="This React app gives business professionals the ability to access
        non-sensitive data about their employees, and easily search, filter,
        and sort through their entire directory."
        buttonText="View Employee Directory"
        buttonRoute="/employee-directory"
      ></Banner>
    </div>
  );
}
export default About;
