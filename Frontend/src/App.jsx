import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import './App.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="dashboard">
            <h1>SportSee</h1>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App