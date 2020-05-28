import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Welcome />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
