import React, { Component } from "react";
import Project from "./Project";
import Tribute from "./Assets/tribute.jpg";
import Quote from "./Assets/random-quote-machine.png";
import Calculator from "./Assets/calc.png";
import MapImg from "./Assets/map.jpg";
import Wiki from "./Assets/wiki.png";
import Tic from "./Assets/tic-tac-toe.png";
export class Projects extends Component {
  state = {
    projects: [
      {
        name: "Tribute Page",
        image: Tribute,
        target: "https://codepen.io/freeCodeCamp/full/zNqgVx"
      },
      {
        name: "Random Quote Machine",
        image: Quote,
        target: "https://codepen.io/freeCodeCamp/full/qRZeGZ"
      },
      {
        name: "JavaScript Calculator",
        image: Calculator,
        target: "https://codepen.io/freeCodeCamp/full/wgGVVX"
      },
      {
        name: "Map Data Across the Globe",
        image: MapImg,
        target: "https://codepen.io/freeCodeCamp/full/mVEJag"
      },
      {
        name: "Wikipedia Viewer",
        image: Wiki,
        target: "https://codepen.io/freeCodeCamp/full/wGqEga"
      },
      {
        name: "Tic Tac Toe Game",
        image: Tic,
        target: "https://codepen.io/freeCodeCamp/full/KzXQgy"
      }
    ]
  };
  render() {
    return (
      <section id="projects">
        <h2>These are some of my projects</h2>

        <div id="projects-grid">
          {this.state.projects.map(project => (
            <Project
              name={project.name}
              image={project.image}
              target={project.target}
              key={project.name}
            />
          ))}
        </div>
        <a
          id="show_all"
          type="button"
          href="https://codepen.io/FreeCodeCamp/"
          target="_blank"
        >
          Show all <span className="button-span"> ></span>
        </a>
      </section>
    );
  }
}

export default Projects;
