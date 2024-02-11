import React, { useState, useEffect } from 'react';
import './CoursesScreen.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simula el progreso incrementando la variable 'progress'
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="progress-bar-container">
      <h2 className='h2'>{progress}%<span className="bold-text"> / 100%</span></h2>
      <div className="progress-bar" style={{ width: `${progress}%`, height: '25px', backgroundColor: '#68C2E8' }}></div>
    </div>
  );
};

export default ProgressBar;
