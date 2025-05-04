import React from "react";
import ReactDOM from "react-dom/client";

//Create nested header using core react
const reactHeading = React.createElement(
  "div",
  { id: "title" },
  React.createElement(
    "h1",
    { id: "h1" },
    React.createElement(
      "h2",
      { id: "h2" },
      React.createElement("h3", { id: "h3" }, "You are in React H3")
    )
  )
);

//create the same element using JSX
const JsxHeading = () => (
  <div className="title">
    <h1 className="h1">
      <h2 className="h2">
        <h3 className="h3">You are in JSX H3</h3>
      </h2>
    </h1>
    {/* <TitleComponent/> */}
    {/* <TitleComponent></TitleComponent> */}
  </div>
);

const TitleComponent = () => (
  <div>
    <h1>This is Title component</h1>
  </div>
);

const HeaderComponent = () => (
    <div className="title">
        <img className="iamge" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVKNsvc-82pqv-UHfEqRA-qyUtiGgt6wzgg&s"></img>
        <input className="search" placeholder=" search here...!"></input>
        <img className="iconn" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"></img>
       
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
