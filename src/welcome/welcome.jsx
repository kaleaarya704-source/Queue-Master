
import React from "react";
import { Link } from "react-router-dom";
import "./welcome.scss";

const Welcome = () => {
  return (
    <>
      {/* 🔝 Navigation */}
      <nav className="navbar">
        <div className="logo">Queue Master</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-btn">Get Started</Link>
        </div>
      </nav>

      {/* 🌟 Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Skip the Line. Save Your Time.</h1>
          <p>
            Join queues remotely, get live updates, and walk in only when it's your turn.
            Smart waiting starts here.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">Join a Queue</Link>
            <a href="#features" className="secondary-btn">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
            alt="Queue Illustration"
          />
        </div>
      </section>

      {/* 🚀 Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Our Queue System?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>📱 Join From Anywhere</h3>
            <p>No need to stand in line physically. Book your slot remotely.</p>
          </div>
          <div className="card">
            <h3>⏱ Live Wait Time</h3>
            <p>Track real-time queue position and estimated waiting time.</p>
          </div>
          <div className="card">
            <h3>🔔 Instant Alerts</h3>
            <p>Get notified when your turn is approaching.</p>
          </div>
          <div className="card">
            <h3>🏢 Multi-Service Support</h3>
            <p>Hospitals, banks, government offices, and more.</p>
          </div>
        </div>
      </section>

      {/* 📖 About Section */}
      <section id="about" className="about">
        <div className="about-text">
          <h2>Built for Real-World Waiting Problems</h2>
          <p>
            Our Queue Management System helps businesses reduce crowding and improve customer experience.
            Spend less time waiting and more time doing what matters.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row text-md-left">

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">QueueMS</h5>
              <p>
                A smart queue management system that helps users avoid long waiting lines
                and enables organizations to serve customers efficiently.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">Services</h5>
              <p><a href="#" className="footer-link">Hospitals</a></p>
              <p><a href="#" className="footer-link">Banks</a></p>
              <p><a href="#" className="footer-link">Government Offices</a></p>
              <p><a href="#" className="footer-link">Customer Support</a></p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">Useful Links</h5>
              <p><a href="#" className="footer-link">Your Account</a></p>
              <p><a href="#" className="footer-link">Help Center</a></p>
              <p><a href="#" className="footer-link">Privacy Policy</a></p>
              <p><a href="#" className="footer-link">Terms & Conditions</a></p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-white">Contact</h5>
              <p><i className="fas fa-home me-2"></i> India</p>
              <p><i className="fas fa-envelope me-2"></i> support@queuems.com</p>
              <p><i className="fas fa-phone me-2"></i> +91 98765 43210</p>
            </div>

          </div>

          <hr className="mb-4" />

          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-start">
                © 2026 QueueMS. All Rights Reserved.
              </p>
            </div>

            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-end">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Welcome;

