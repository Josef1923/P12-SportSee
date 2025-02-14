import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./page/dashboard"
import Home from "./components/home";
import './App.scss' 

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App