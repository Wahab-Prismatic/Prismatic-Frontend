import axios from 'axios';
import { useEffect, useState } from 'react';
import '../assets/css/BlogsDetail.css';
import { Link, useParams } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8000/api';
const BlogsDetail = () => {
    const { slug } = useParams();
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // for loading state

    useEffect(() => {
        axios.get(`/blogs`, {
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        })
            .then(response => {
                console.log('Recent Blogs Data: ', response.data);
                setRecentBlogs(response.data.data || []); // Ensure recentBlogs is an array
            })
            .catch(error => {
                console.error('Error fetching recent blogs:', error);
            })
            .finally(() => {
                setIsLoading(false); // end loading state after response
            });
    }, [slug]);

    // Find the specific blog based on the slug parameter
    const blog = recentBlogs.find(b => b.slug === slug);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    // If no blogs are found or the specific blog is not found
    if (recentBlogs.length === 0 || !blog) {
        return <p>No record found</p>;
    }

    return (
        <div>
            {/* Page Header */}
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Prismatic Blogs</h1>
                            <span>
                                We are ready to take over implementation of any idea starting with business analysis, over development and testing up to product launch and beyond.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="blog-single gray-bg">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-8 m-15px-tb">
                            <article className="article">
                                {/* Blog Title and Meta */}
                                <div className="article-title">
                                    <h2>{blog.title}</h2>
                                    <div className="media">
                                        <div className="avatar">
                                            <img
                                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                alt="avatar"
                                                title="avatar"
                                            />
                                        </div>
                                        <div className="media-body">
                                            <label>Admin</label>
                                            <span>
                                                {new Date(blog.created_at).toLocaleDateString('en-GB', {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit'
                                                })}{" "}
                                                {new Date(blog.created_at).toLocaleTimeString('en-GB', {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    second: '2-digit'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div className="article-content">
                                    <p>{blog.short_desc}</p>
                                    <p dangerouslySetInnerHTML={{ __html: blog.long_desc }}></p>
                                </div>
                            </article>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 m-15px-tb blog-aside">
                            <div className="widget widget-latest-post">
                                <div className="widget-title">
                                    <h3>Latest Post</h3>
                                </div>
                                {recentBlogs.length > 0 ? recentBlogs.map(b => (
                                    <div className="widget-body" key={b.id}>
                                        <div className="latest-post-aside media aside-pic">
                                            <div className="lpa-left media-body">
                                                <div className="lpa-title">
                                                    <h5>
                                                        <Link to={`/blogs/${b.slug}`}>
                                                            {b.title}
                                                        </Link>
                                                    </h5>
                                                </div>
                                                <div className="lpa-meta">
                                                    <p className="name">admin</p>
                                                    <p className="date">
                                                        {new Date(b.created_at).toLocaleDateString('en-GB', {
                                                            year: 'numeric',
                                                            month: '2-digit',
                                                            day: '2-digit'
                                                        })}{" "}
                                                        {new Date(b.created_at).toLocaleTimeString('en-GB', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            second: '2-digit'
                                                        })}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="lpa-right">
                                                <Link to={`/blogs/${b.slug}`}>
                                                    <img src={`/src/assets/blogs-images/${b.blog_image}`} alt={b.title} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )) : <p>No Record Found</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetail;
