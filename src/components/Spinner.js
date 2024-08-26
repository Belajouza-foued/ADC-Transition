// components/LoadingSpinner.js
import React from 'react';
import '../components/Spinner.css' // Assurez-vous que ce fichier existe et contient les styles pour le spinner

const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner">
      <span className='spinner-text'>loading</span></div>         
  </div>
);

export default LoadingSpinner;
