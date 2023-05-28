import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboards/Dashboard"
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Dashboards/Record/Profile";
import Boys from "./components/Home Page Components/Hostels/Boys";
import Girls from "./components/Home Page Components/Hostels/Girls";
import HostelRules from "./components/Home Page Components/Hostels/HostelRules";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile/> } />


        <Route path="/Boys" component={<Boys/>} />
        <Route path="/Girls" component={<Girls/>} />
        <Route path="/HostelRules" component={<HostelRules/>} />


      </Routes>
    </div>
  );
}

export default App;
