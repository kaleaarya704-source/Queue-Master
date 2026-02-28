
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StaffDashboard.scss";
import {
  FiMenu,
  FiBell,
  FiUser,
  FiPlay,
  FiCheckCircle,
  FiPause,
  FiSkipForward,
  FiList,
  FiLogOut
} from "react-icons/fi";

const StaffDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewQueue = () => {
    navigate("/staff/view-queue");
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("staffToken");
    localStorage.removeItem("staffData");
    navigate("/");
  };

  return (
    <div className={`staff-console ${sidebarOpen ? "sidebar-open" : ""}`}>

      {/* TOP NAVBAR */}
      <header className="topbar">
        <div className="top-left">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FiMenu />
          </button>

          <div className="brand">
            <span className="logo">Q</span>
            <strong>StaffConsole</strong>
          </div>
        </div>

        <div className="top-right">
          <span className="counter-badge">Counter 04</span>
          <FiBell />
          <div className="user">
            <FiUser />
            <span>Staff Member</span>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className={`sidenav ${sidebarOpen ? "open" : ""}`}>
        <div className="profile">
          <div className="avatar">
            <FiUser />
          </div>
          <h4>Abhi Wargad</h4>
          <span>Staff · Counter 04</span>
        </div>

        <nav>
          <button onClick={handleViewQueue}>
            <FiList /> View Queue
          </button>

          <button className="logout" onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">

        <div className="page-header">
          <h2>Counter 04 Console</h2>
          <p>Manage your active service and queue flow.</p>
        </div>

        <section className="dashboard-grid">

          {/* NOW SERVING */}
          <div className="card now-serving">
            <span className="section-label">NOW SERVING</span>
            <h1>A-102</h1>
            <h3>John Doe</h3>
            <p>General Inquiry · Wait: 12 mins</p>

            <button className="btn primary">
              <FiPlay /> Call Next
            </button>

            <button className="btn success">
              <FiCheckCircle /> Mark Served
            </button>

            <div className="row">
              <button className="btn info">
                <FiPause /> Hold
              </button>
              <button className="btn light">
                <FiSkipForward /> Skip
              </button>
            </div>
          </div>

          {/* UPCOMING QUEUE */}
          <div className="card queue-panel">
            <div className="queue-header">
              <h3>Upcoming Queue</h3>
              <span className="count">12 Left</span>
            </div>

            <ul>
              <li><strong>A-103</strong><span>Account Opening</span></li>
              <li><strong>A-104</strong><span>General Inquiry</span></li>
              <li><strong>A-105</strong><span>Consultation</span></li>
            </ul>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="footer">
          © 2026 QueueMaster · Staff Operations Console
        </footer>

      </main>
    </div>
  );
};

export default StaffDashboard;