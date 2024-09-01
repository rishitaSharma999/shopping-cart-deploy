import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {baseUrl} from "../baseUrl";

export const AppContext = createContext();

 // This is the base URL for your API

export default function AppContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const navigate = useNavigate();

  const fetchBlogPosts = async (page = 1, tag = null, category = null) => {
    setLoading(true);
    let url = `${baseUrl}/posts?_page=${page}`;
    console.log("the tag and category is ",tag+" "+category);
    if (tag) {
      url = `${baseUrl}/posts?tags_like=${encodeURIComponent(tag)}`;
    } else if (category) {
      url = `${baseUrl}/posts?category=${encodeURIComponent(category)}`;
    }
    console.log("Fetching from URL:", url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched posts data:", data);
      if (!data || data.length === 0) {
        throw new Error("No posts found");
      }

      setPosts(data);
      setPage(page);

      // Fetch page info to get total pages
      const pageInfoRes = await fetch(`${baseUrl}/api/pageInfo`);
      const pageInfo = await pageInfoRes.json();
      const currentPageInfo = pageInfo.find(info => info.page === parseInt(page));
      setTotalPages(currentPageInfo ? currentPageInfo.totalPages : 1);

    } catch (error) {
      console.log("Error in Fetching BlogPosts", error);
      setPosts([]);
      setPage(1);
      setTotalPages(null);
    }
    setLoading(false);
  };

  const handlerPageChange = (page) => {
    navigate({ search: `?page=${page}` });
    setPage(page);
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlerPageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}