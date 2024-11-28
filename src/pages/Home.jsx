import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Oral Health</h1>
        <p>Using AI to detect and prevent oral cancer early. Together, we save lives.</p>
        <div className="cta-buttons">
          <a href="/about" className="btn primary">Learn More</a>
          <a href="/detect" className="btn secondary">Detect Now</a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://media.istockphoto.com/id/1489956013/photo/medical-technology-ai-technology-is-utilized-by-doctors-for-diagnosing-increasing-the.jpg?s=612x612&w=0&k=20&c=kB9Jwz3S8XFiQO-dSkwGB1IUdbR_ouLjRUKKLPFKj9Y="
          alt="AI Detection Illustration"
        />
      </div>
    </section>
  );
};

export default Home;
