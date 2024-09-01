import React from 'react'
import Header from '../components/BlogFolder/Header';
import Blogs from '../components/BlogFolder/Blogs';
import Pagination from '../components/BlogFolder/Pagination';



const Home = () => {
    return (
        <div>
            <Header />
            <Blogs />
            <Pagination />
        </div> 
    )
}

export default Home