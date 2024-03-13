import React from 'react';
import Image from 'next/image';
import "./globals.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <Image 
      src="/brett-logo-dark.png" 
      alt="Logo Spinner" 
      width={100}
      height={100}
      className="spinner-image" />
    </div>
  );
};

export default LoadingSpinner;
