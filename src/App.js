import './App.css';
import Practice from  "./practice.jsx";
import Login from "./login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./register.jsx";
import Pavbhaji from "./pavbhaji.jsx";
import Tacos from "./tacos.jsx";
import Poundcake from "./poundcake.jsx";
import Onigiri from "./onigiri.jsx";
import Pie from "./pie.jsx"

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Practice />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/pavbhaji" element={<Pavbhaji/>}/>
          <Route path="/tacos" element={<Tacos/>}/>
          <Route path="/poundcake" element={<Poundcake/>}/>
          <Route path="/onigiri" element={<Onigiri/>}/>
          <Route path="/pie" element={<Pie/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
