import "./App.css";

import Login from "./containers/Login";
import Register from "./containers/Register";

import { Route, Routes } from "react-router-dom";
import Weather from "./containers/Weather";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
