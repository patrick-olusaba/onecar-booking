import { useState } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/post";

const POSTS_PER_PAGE = 6;

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    return (
        <section className="blog-index">

            {/* Header */}
            <div className="blog-header">
                <h1>Journal</h1>
                <p>Insights on luxury travel & chauffeur services</p>
            </div>

            {/* Grid */}
            <div className="blog-grid">
                {currentPosts.map(post => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="blog-card"
                    >
                        <img src={post.image} alt={post.title} />

                        <div className="blog-card-content">
                            <span className="blog-date">{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <span className="read-more">
                                Read Article →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="blog-pagination">
                {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;

                    return (
                        <button
                            key={page}
                            className={`page-btn ${
                                currentPage === page ? "active" : ""
                            }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

        </section>
    );
};

export default Blog;
