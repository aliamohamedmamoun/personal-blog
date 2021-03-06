import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

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
