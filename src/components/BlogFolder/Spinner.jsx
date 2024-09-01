import React from 'react';

const Spinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <div style={{
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderTopStyle: 'solid',
        borderRightStyle: 'solid',
        borderBottomStyle: 'solid',
        borderLeftStyle: 'solid',
        borderWidth: '2px',
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        borderRightColor: 'rgba(255, 255, 255, 0.1)',
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        borderLeftColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        animation: 'spin 1.5s linear infinite',
        backgroundColor: 'transparent', // Ensure the background is transparent
      }} />
      <p style={{
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: 'white', // Set the text color to white
      }}>Loading...</p>
    </div>
  );
};

export default Spinner;