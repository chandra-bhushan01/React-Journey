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


const elem = <span>React Element</span>



const Title = (
  <h1 className="head" tabIndex="5">
    Namaste react using JSX.
  </h1>
);


const data = api.getData();

const HeadingComponent = () => (
  <div>
    {data}
    <h1 className="heading">hello fucntional component</h1>
    {/* {Title} */}
    <h2>{100+54}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title);
