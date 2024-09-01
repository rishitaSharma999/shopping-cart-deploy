import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return ( 
    <div style={{
      margin: '100px 0'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        margin: '16px 0'
      }}>
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <p style={{
            fontWeight: 'bold',
            fontSize: '3rem',
            textAlign: 'center',
            margin: '200px 0',
            color: '#fff'
          }}>
            Data Not Found
          </p>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;