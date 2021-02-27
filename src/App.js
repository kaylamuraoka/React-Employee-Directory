import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import EmployeeDirectory from "./pages/EmployeeDirectory";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/employee-directory" component={EmployeeDirectory} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
