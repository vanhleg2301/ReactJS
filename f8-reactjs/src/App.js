import "./App.css";
import React from "react";
import {
  Counter,
  Counter2,
  Counter3,
  Counter4,
} from "./components/useState/counter"; // Import using different names
import {
  Two_wayBinding,
  Two_wayBinding2,
  Two_wayBinding3,
  Two_wayBinding4,
} from "./components/useState/Two_wayBinding";
import Todolist from "./components/useState/todolist";
import Basic from "./components/useEffect/basic";
import Mount_unmount from "./components/useEffect/mount_unmount";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter4 />} />
          <Route path="/twoway" element={<Two_wayBinding4 />} />
          <Route path="/list" element={<Todolist />} />
          <Route path="/m" element={<Mount_unmount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
