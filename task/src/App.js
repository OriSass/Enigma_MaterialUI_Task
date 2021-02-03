import HeaderBar from "./Components/HeaderBar/HeaderBar.js";
import SideNavBar from "./Components/SideNavBar/SideNavBar.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import './App.css';

function App() {
  return (
    <div className="main-container"> 
      <HeaderBar />
      <div className="center-row">
        <SideNavBar />
        <Dashboard />
      </div>
      
    </div>
  );
}

export default App;
