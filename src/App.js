import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
