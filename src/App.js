import './App.css';
import Practice from  "./practice.jsx";
import Login from "./login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
