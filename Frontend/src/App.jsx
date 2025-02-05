import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Dashboard from "./components/dashboard/dashboard"
import './App.scss' 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <Routes>
            <Route path="/user/:id" element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App