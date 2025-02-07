import { useState } from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      <div
        className={`container content ${
          isSidebarOpen ? "expanded" : "collapsed"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
