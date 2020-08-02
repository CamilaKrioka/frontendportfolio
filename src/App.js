import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Header from "./Components/Header";
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
        
    </div>
  );
}

export default App;
