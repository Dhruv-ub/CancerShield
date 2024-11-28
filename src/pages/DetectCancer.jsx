import React from 'react';
import './DetectCancer.css';

const DetectCancer = () => {
  return (
    <section className="detect">
      <h2>Detect Oral Cancer</h2>
      <p>Upload an image of your mouth for AI-based detection.</p>
      <form>
        <input type="file" accept="image/*" />
        <button className="btn primary" type="submit">Upload</button>
      </form>
    </section>
  );
};

export default DetectCancer;
