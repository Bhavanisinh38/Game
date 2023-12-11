import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Subloader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className={`sub-loader ${loading ? 'hide' : ''}`}>
      <span className="sub-inner"></span>
      <div className="sub-loader-text">Connecting ...</div>
    </div>
  );
}

export default Subloader;