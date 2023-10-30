
import React from "react";
import Profile from "./Profile.js";
import About from "./About.js";
import "./App.css"




function App() {

  const style1={
  //  backgroundColor: "rgb(15, 205, 248)",
    

  }
 
  
  return (
    <div style={style1} className="App-div">

      <div class="w-4/5 m-auto mt-14 flex justify-between" >
        <Profile />
      <About />
      
      </div>
    </div>
  );
}

export default App;
