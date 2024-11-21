import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchBlogs } from '../redux/slices/blogSlice';
import '../assets/css/Blogs.css';
import BlogImg from '/images/Blogs.webp';
import { ShimmerPostList } from 'react-shimmer-effects';
import ReactPaginate from 'react-paginate';

const Blogs = () => {
    const [columns, setColumns] = useState(3); // Default column lenght is '3'
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { blogs, loading, error, currentPage, lastPage } = useSelector((state) => state.blogs);

    const page = parseInt(searchParams.get('page')) || 1;

    useEffect(() => {
        dispatch(fetchBlogs(page));
        // Function to update columns based on window width
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width <= 576) {
                setColumns(1); // For Mobile Devices 
            } else if (width <= 768) {
                setColumns(2); // For Tablet Devices
            } else {
                setColumns(3); // For Desktop Devices
            }
        };

        // Set initial columns based on screen size
        updateColumns();

        // Add resize event listener
        window.addEventListener('resize', updateColumns);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateColumns);
        }
    }, [dispatch, page]);

    const handlePageClick = ({ selected }) => {
        const newPage = selected + 1;
        navigate(`/blogs?page=${newPage}`);
    };

    const renderErrorMessage = () => {
        if (!error) return null;

        const message = error.message || 'An enexpected error occurred. Please try again.'
        const statusMessage = error.status ? `Error ${error.status}:` : '';

        return (
            <div className="alert alert-danger text-center" role="alert">
                {statusMessage}{message}
            </div>
        );
    }

    return (
        <>
            <div className="products-header-wrapper">

                <img src={BlogImg} alt="blogs" title="blogs" draggable={false} />
                <div className="P-header-text text-content">
                    <h6>Blogs</h6>
                    <h4>We have over 3 years of experience</h4>
                </div>

            </div>
            <div id="main-wrapper">
                <div className="site-wrapper-reveal">
                    {renderErrorMessage()}
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
                        {/* Blogs area start */}
                        <div className="container">
                            <div className="row">
                                {loading && blogs.length > 0 ? (
                                    Array.from({ length: 6 }).map((_, index) => (
                                        <ShimmerPostList
                                            postStyle="STYLE_FOUR"
                                            col={columns}
                                            row={2}
                                            gap={30}
                                            key={index}
                                        />
                                    ))
                                ) : Array.isArray(blogs) ? (
                                    blogs.map((blog) => (
                                        <div className="col-lg-4 col-md-6 mb-30" key={blog.id} style={{ marginBottom: '40px' }}>
                                            <div className="single-blog-item blog-grid">
                                                <div className="post-feature blog-thumbnail">
                                                    <Link to={`/blogs/${blog.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                                        <img
                                                            className="img-fluid"
                                                            src={`/blogs-images/${blog.blog_image}`}
                                                            alt="Blog"
                                                            title="Blog Images"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="post-info lg-blog-post-info">
                                                    <h5 className="post-title font-weight--bold">
                                                        <Link to={`/blogs/${blog.slug}`} style={{ overflowWrap: "break-word" }} onClick={() => window.scrollTo(0, 0)}>
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
                                                        <Link to={`/blogs/${blog.slug}`} onClick={() => window.scrollTo(0, 0)}>
                                                            Read more <i className="ml-1 button-icon fa fa-long-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No blogs available.</p>
                                )}
                            </div>
                            {
                                lastPage > 1 && (
                                    <ReactPaginate
                                        previousLabel={'Previous'}
                                        nextLabel={'Next'}
                                        breakLabel={'...'}
                                        pageCount={lastPage}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={3}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination'}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        previousClassName={'page-item'}
                                        previousLinkClassName={'page-link'}
                                        nextClassName={'page-item'}
                                        nextLinkClassName={'page-link'}
                                        breakClassName={'page-item'}
                                        breakLinkClassName={'page-link'}
                                        activeClassName={'active'}
                                        forcePage={page - 1} // Adjust to zero-based indexing for selected page
                                    />
                                )
                            }
                        </div>
                    </div>
                    {/* Blogs area end */}
                </div>
            </div>
            {/* Call to Action Area Start */}
            <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cta-content md-text-center">
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="cta-button-group--one text-center">
                                <Link to="/contact-us" className="btn btn--white btn-one" onClick={() => window.scrollTo(0, 0)}>
                                    <span className="btn-icon mr-2">
                                        <i className="far fa-comment-alt-dots"></i>
                                    </span>
                                    Let's talk
                                </Link>
                                <Link to="/about-us" className="btn btn--secondary btn-two" onClick={() => window.scrollTo(0, 0)}>
                                    <span className="btn-icon mr-2">
                                        <i className="fa fa-info-circle"></i>
                                    </span>
                                    Get info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call to Action Area end */}
        </>
    )
}

export default Blogs