import React from 'react'

const Header = () => {
  return (
    <div style={{
      
      width: '100%',
      textAlign: 'center',
      borderBottom: '2px solid #ccc',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgb(19 21 29)',
      padding: '1rem'
    }}>
      <header>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          color: '#fff'
        }}>Blogs</h1>
      </header>
    </div>
  )
}

export default Header