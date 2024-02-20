import React from 'react';
import './CoursesScreen.css';

const ProgressBar = ({ progreso }) => {
  return (
    <div className="progress-bar-container">
      <h2 className='h2'>{progreso}%<span className="bold-text"> / 100%</span></h2>
      <div className="progress-bar" style={{ width: `${progreso}%`, height: '25px', backgroundColor: '#68C2E8' }}></div>
    </div>
  );
};

export default ProgressBar;
