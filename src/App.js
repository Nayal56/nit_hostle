import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboards/Dashboard"
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Dashboards/Record/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile/> } />

      </Routes>
    </div>
  );
}

export default App;
