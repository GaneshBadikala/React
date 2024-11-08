import React from "react";
import  ReactDOM  from "react-dom";



const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1"
  );
  

  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading]
  );
  
  console.log(heading);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element inside the root
  
  //async defer
  root.render(container);
   