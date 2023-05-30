import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboards/Dashboard"
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Dashboards/Record/Profile";
import Boys from "./components/Home Page Components/Hostels/Boys";
import Girls from "./components/Home Page Components/Hostels/Girls";
import HostelRules from "./components/Home Page Components/Hostels/HostelRules";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn == "true" ? <Dashboard /> : <Home />}
        />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile/> } />


        <Route path="/Boys" element={<Boys/>} />
        <Route path="/Girls"  element={<Girls/>} />
        <Route path="/HostelRules"  element={<HostelRules/>} />


      </Routes>
    </div>
  );
}

export default App;
