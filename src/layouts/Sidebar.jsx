import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="btn btn-light mb-3" onClick={toggleSidebar}>
        ☰
      </button>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className={(e) =>
              e.isActive
                ? "active nav-link text-primary"
                : "nav-link text-white"
            }
            to="/"
          >
            <FaHome /> {isOpen && " Home"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={(e) =>
              e.isActive
                ? "active nav-link text-primary"
                : "nav-link text-white"
            }
            to="/users/12456"
          >
            <FaUser /> {isOpen && " Users"}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={(e) =>
              e.isActive
                ? "active nav-link text-primary"
                : "nav-link text-white"
            }
            to="/about"
          >
            <FaCog /> {isOpen && " Settings"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
