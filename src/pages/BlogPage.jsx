import React, { useContext, useEffect, useState } from "react";
import Header from "../components/BlogFolder/Header";
import { AppContext } from "../Context/AppContext";
import Spinner from "../components/BlogFolder/Spinner"
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../components/BlogFolder/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const blogId = location.pathname.split("/").at(-1);
  console.log(blogId);
  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${baseUrl}/posts?id=${blogId}`;
   console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("this is data[0]",data[0]);
      setBlog(data[0]);
      setRelatedBlogs([]);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchRelatedBlogs();
  }, [location.pathname]);

  return (
    <div className="my-[100px]">
      <Header />
      <div className="w-11/12 mx-auto">
        <div>
          <button
            className="border-2 border-gray-300 py-1 px-4 rounded-md mb-6"
            style={{
              backgroundColor: '#222',
              color: '#E8E8E8',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: '2px solid white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <div>
          {loading ? (
            <Spinner />
          ) : blog ? (
            <div>
              <BlogDetails post={blog} />
              {/*<h2 className="text-2xl font-bold my-10" style={{color:'#E8E8E8'}}>Related Blogs</h2>*/}
              <div className="flex flex-col gap-y-8">
                {relatedBlogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No Blog Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;