import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Welcome from "./components/dashboard/welcome"
import './App.scss' 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="dashboard">
            <Welcome/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App