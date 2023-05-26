import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AdminPage from "./components/AdminPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AdminPAge" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
