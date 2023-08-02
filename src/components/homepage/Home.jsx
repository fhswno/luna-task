import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my App!</h1>
      <p>
        This app was created by{" "}
        <a
          href="https://www.davidohayon.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          David Ohayon
        </a>
        . It is a React app that uses various libraries to display data in a
        table and in charts.
      </p>
      <p>
        The data is fetched from the <code>MOCK_DATA.json</code> file in the{" "}
        <code>src</code> folder.
      </p>
      <p>
        You can view the source code on{" "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
      <p>
        You can view the charts by clicking on the{" "}
        <Link to="/charts">Charts</Link> link.
      </p>
      <p>
        You can view the table by clicking on the <Link to="/table">Table</Link>{" "}
        link.
      </p>
    </div>
  );
};
