import React from 'react';

// Simple test component to verify React is rendering
const TestApp = () => {
  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: '#f0f0f0', 
      color: '#000000',
      fontSize: '24px',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#000000', marginBottom: '20px' }}>React is Working!</h1>
      <p style={{ color: '#333333' }}>If you can see this, React is rendering correctly.</p>
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#ffffff', 
        border: '2px solid #000000',
        borderRadius: '8px'
      }}>
        <p style={{ color: '#000000' }}>This is a test to verify the app is loading.</p>
      </div>
    </div>
  );
};

export default TestApp;



