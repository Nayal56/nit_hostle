import "./App.css";
import Home from "./components/Home";
<<<<<<< HEAD
import Dashboard from "./components/Dashboards/Dashboard";
// import AdminPage from "./components/AdminPage";
=======
import Dashboard from "./components/Dashboard"
>>>>>>> 08abd06699f02d497a14bc8dc7bac5ea68d47289
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/AdminPAge" element={<AdminPage />} /> */}
=======
      <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
>>>>>>> 08abd06699f02d497a14bc8dc7bac5ea68d47289
      </Routes>
    </div>
  );
}

export default App;
