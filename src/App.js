import "./App.css";

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
