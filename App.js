import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
  <h1 id="heading" className="">
    hello react using JSX
  </h1>
);

//React Components
//class based Components  - OLD
// Function Based Components - NEW

//React Functional Components

const title = () => (
  <h1 className="head" tabIndex="5">
    Namaste react using JSX.
  </h1>
);

const HeadingComponent = () => (
  <div>
    <title />
    <h1 className="heading">hello fucntional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
