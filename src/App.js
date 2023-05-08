import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      <Home toggleLogin={toggleLogin} />
      {showLogin && <Login toggleLogin={toggleLogin} />}
    </div>
  );
}

export default App;
