import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const APP_Id = "59d73805";
  const API_KEY = "5351807f63b15aad9634e98cdad96080";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_Id}&app_key=${API_KEY}`;

  
  
  useEffect(()=>{
    console.log("Effect has been run ")
  })

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
