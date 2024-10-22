import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../redux/slices/blogSlice';
import '../assets/css/BlogsSection.css';
import Loader from '../common/Loader';

const BlogsSection = () => {
    const dispatch = useDispatch();
    const { blogs, loading, error } = useSelector((state) => state.blogs);
    useEffect(() => {
       dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <div className="blog-pages-wrapper section-space--ptb_100" data-aos="fade-up" data-aos-duration="3000">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <div className="section-heading">
                            <h2>LATEST BLOG <em>POST</em></h2>
                            <hr style={{ width: '80px', marginTop: '1rem', height: '1px' }} />
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row blogs-card-row">
                    {/* Display loading, error, or blog content */}
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <p>Error fetching blogs: {error}</p>
                    ) : blogs.length > 0 ? (
                        blogs.slice(0, 3).map((blog) => (
                            <div className="col-lg-4 col-md-6 mb-30 wow move-up" key={blog.id}>
                                {/* Single Blog Item */}
                                <div className="single-blog-item blog-grid blog-card">
                                    {/* Post Feature Start */}
                                    <div className="post-feature blog-thumbnail">
                                        <Link to={`/blogs/${blog.slug}`}>
                                            <img
                                                className="img-fluid"
                                                loading="lazy"
                                                src={`/src/assets/blogs-images/${blog.blog_image}`}
                                                alt="Blog Images"
                                                title="Blog Images"
                                            />
                                        </Link>
                                    </div>
                                    {/* Post Feature End */}
                                    {/* Post Info Start */}
                                    <div className="post-info lg-blog-post-info pb-3">
                                        <h5 className="post-title font-weight--bold">
                                            <Link style={{ overflowWrap: 'break-word' }} to={`/blogs/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h5>
                                        <div className="post-date" style={{ color: '#93be46', fontSize: '14px' }}>
                                            <span className="fa fa-calendar meta-icon" style={{ marginRight: '5px' }}></span>
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
                                        </div>
                                        <div className="post-excerpt mt-15">
                                            <p style={{ overflowWrap: 'break-word' }}>{blog.short_desc}</p>
                                        </div>
                                        <div className="btn-text">
                                            <Link to={`/blogs/${blog.slug}`}>
                                                Read more <i className="ml-1 button-icon fa fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Post Info End */}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Record Found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogsSection