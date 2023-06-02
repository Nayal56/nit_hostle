import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboards/Dashboard"
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Dashboards/Record/Profile";
import Boys from "./components/Home Page Components/Hostels/Boys";
import Girls from "./components/Home Page Components/Hostels/Girls";
import HostelRules from "./components/Home Page Components/Hostels/HostelRules";
// import Navbar from "./components/Dashboards/Admin/Navbar";
// import Rightnav from "./components/Dashboards/Rightnav";
// import HostleCard from "./components/Dashboards/Student/HostleCard";
import StudentDashboard from "./components/Dashboards/Student/StudentDashboard";
import HostelCard from "./components/Dashboards/Student/HostelCard";
import RebaitForm from "./components/Dashboards/Student/Rebait Form";


function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <div className="App">
    <Routes>
         {/* <Route path="/" element={ <StudentDashboard/> } /> */}
      <Route path="/" element={<Home/>} />
        <Route
          exact
          path="/"
          element={isLoggedIn == "true" ? <Dashboard /> : <Home />}
        />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile/> } />
        <Route path="/StudentDashboard" element={ <StudentDashboard/> } />
        <Route path="/HostelCard" element={<HostelCard/> } />
        <Route path="/RebaitForm" element={ <RebaitForm/> } />



        <Route path="/Boys" element={<Boys/>} />
        <Route path="/Girls" element={<Girls/>} />
        <Route path="/HostelRules" element={<HostelRules/>} />
      </Routes>
    </div>
  );
}

export default App;
