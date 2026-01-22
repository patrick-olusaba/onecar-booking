import { Link } from "react-router-dom";
import { posts } from "../data/post.ts";

const Blog = () => {
    return (
        <section className="blog-index">
            <div className="blog-header">
                <h1>Journal</h1>
                <p>Insights on luxury travel & chauffeur services</p>
            </div>

            <div className="blog-grid">
                {posts.map(post => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.slug}`}
                        className="blog-card"
                    >
                        <img src={post.image} alt={post.title} />
                        <div className="blog-card-content">
                            <span>{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Blog;
