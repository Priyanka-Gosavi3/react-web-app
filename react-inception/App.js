// const heading = document.createElement("h1");                        //using javascript
// heading.textContent = "Hello World from javascript....!";
// const root = document.getElementById("root");
// root.appendChild(heading);


//using core React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from namaste react...!!!"
); 
const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);
root.render(heading);

//---- Create Nested elements using core react without JSX-------//
{
  /* <div id="parent">
  <div id="child">
    <div id="baby">
      <h1 id="h1">I am H1</h1>
      <h2 id="h2">I am H2</h2>
    </div>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("div", { id: "baby" }, [
      React.createElement("h1", { id: "h1" }, "I am H1"),
      React.createElement("h2", { id: "h2" }, "I am H2"),
    ])
  )
);
const rooot = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(parent);



