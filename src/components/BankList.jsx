import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ServiceModern.scss";

const Banks = () => {
  const navigate = useNavigate();

  const banks = [
    { name: "State Bank of India", status: "Open", time: "10:00 AM – 4:00 PM" },
    { name: "HDFC Bank", status: "Open", time: "9:30 AM – 3:30 PM" },
    { name: "ICICI Bank", status: "Limited", time: "10:00 AM – 3:00 PM" },
    { name: "Axis Bank", status: "Open", time: "9:00 AM – 4:00 PM" },
    { name: "Punjab National Bank", status: "Busy", time: "10:00 AM – 4:00 PM" },
  ];

  return (
    <div className="service-page">
      {/* NAVBAR */}
      <div className="service-navbar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="nav-brand">
          <div className="logo">🏦</div>
          <div>
            <h2>Banks</h2>
            <p>Select a bank to continue</p>
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="service-table">
        {banks.map((bank) => (
          <div
            key={bank.name}
            className="service-row"
            onClick={() =>
              navigate(`/banks/${encodeURIComponent(bank.name)}/services`)
            }
            tabIndex="0"
          >
            <div className="row-main">
              <div className="service-name">{bank.name}</div>
              <div className="service-meta">⏱ {bank.time}</div>
            </div>

            <div className={`status ${bank.status.toLowerCase()}`}>
              {bank.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banks;
