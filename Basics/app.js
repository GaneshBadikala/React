import React from "react";
import  ReactDOM  from "react-dom/client";

var Heading =()=>{return <h2 id="h"> hey </h2>}
 // transpiled using babel by parcel


// component

const HeadingComponent = ()=>{
    
    return <div id="he"> 
    {Heading()}
    < Heading />
    <h1 id="justheading">  hey component </h1></div>
    
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
   