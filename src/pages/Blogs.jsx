import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Blogs.css';
import BlogImg from '../assets/images/Blogs.jpg';

axios.defaults.baseURL = 'http://localhost:8000/api';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('/blogs');
                setBlogs(response.data.data);
                setLoading(false)
                console.log("Response", response.data.data);
            } catch (error) {
                console.error('Error fetching the blogs:', error);
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);
    return (
        <>
            <div className="products-header-wrapper">
                <img src={BlogImg} alt="blogs" title="blogs" />
                <div className="P-header-text text-content">
                    <h6>Blogs</h6>
                    <h4>We have over 3 years of experience</h4>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    <div className="about-banner-wrap banner-space processing-hero-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 ml-auto mr-auto">
                                    <div className="about-banner-content text-center">
                                        <h1 className="mb-15 text-white"></h1>
                                        <h5 className="font-weight--normal text-white"></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-pages-wrapper section-space--ptb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title-wrap text-center section-space--mb_60">
                                        <h1 className="section-sub-title mb-20 pt-3">Prismatic Blogs</h1>
                                        <h5 className="mb-3 blog-want-start">
                                            Want to Start <span className="text-color-primary">Your Own Blog?</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                {loading ? (
                                    <p>Loading...</p>
                                ) : blogs.length > 0 ? (
                                    blogs.map((blog) => (
                                        <div className="col-lg-4 col-md-6 mb-30" key={blog.id} style={{marginBottom: '40px'}}>
                                            <div className="single-blog-item blog-grid">
                                                <div className="post-feature blog-thumbnail">
                                                    <Link to={`/blogs/${blog.slug}`} >
                                                        <img
                                                            className="img-fluid"
                                                            src={`src/assets/blogs-images/${blog.blog_image}`}
                                                            alt="Blog"
                                                            title="Blog Images"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="post-info lg-blog-post-info">
                                                    <h5 className="post-title font-weight--bold">
                                                        <Link to={`/blogs/${blog.slug}`} style={{ overflowWrap: "break-word" }}>
                                                            {blog.title}
                                                        </Link>
                                                    </h5>
                                                    <div className="post-date" style={{ color: "#93be46" }}>
                                                        <span className="fa fa-calendar meta-icon" style={{ marginRight: '5px' }}></span>
                                                        {new Date(blog.created_at).toLocaleDateString('en-GB', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            second: '2-digit'
                                                        })}
                                                    </div>
                                                    <div className="post-excerpt mt-15">
                                                        <p style={{ overflowWrap: "break-word" }}>{blog.short_desc}</p>
                                                    </div>
                                                    <div className="btn-text">
                                                        <Link to={`/blogs/${blog.slug}`}>
                                                            Read more <i className="ml-1 button-icon fa fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No Record Found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs