import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from '../components/BlogFolder/Header';
import Blogs from '../components/BlogFolder/Blogs';
import Pagination from '../components/BlogFolder/Pagination';

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  console.log("this is category",category);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div style={{
        marginTop: '100px',
        marginBottom: '-50px',
        maxWidth: 'max-w-2xl',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '91.666667%'
      }}>
        <button style={{
          border: '2px solid #d1d5db',
          padding: '0.5rem 1.5rem', // Increased padding for a larger hit area
          borderRadius: '0.5rem',
          backgroundColor: '#222', // Dark background
          color: '#E8E8E8', // Light text color
          fontSize: '1rem', // Slightly larger font size
          fontWeight: 'bold', // Bold font weight for emphasis
          cursor: 'pointer', // Pointer cursor for better user interaction
          transition: 'background-color 0.3s ease', // Smooth transition for hover effect
          '&:hover': {
            backgroundColor: '#333', // Darker background on hover
          },
        }} onClick={() => navigate(-1)}>
          Back
        </button>
        <h2 style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#E8E8E8'
        }}>
          Blogs in Category <span style={{
            textDecoration: 'underline',
            color: '#1f73d5'
          }}>#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;