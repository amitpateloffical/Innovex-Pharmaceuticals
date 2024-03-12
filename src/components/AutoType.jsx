import React, { useEffect } from 'react';
import Typed from 'typed.js';

const AutoType = () => {
  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Innovative' ,'Visionary','Impactful'],

    
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <h4 style={{color:'Black'}}>INNOVEX Pharmaceuticals :- <span style={{color:'red'}} className="auto-type"></span> </h4>
    </div>
  );
};

export default AutoType;
