import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { posts } from "../data/post";

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);

    useEffect(() => {
        document.body.classList.add("blog-hero-loaded");
        return () => document.body.classList.remove("blog-hero-loaded");
    }, []);

    if (!post) {
        return (
            <section className="blog-post">
                <h2>Article not found</h2>
                <Link to="/blog">← Back to Journal</Link>
            </section>
        );
    }

    return (
        <article className="blog-post">
            {/* Hero */}
            <div
                className="blog-hero"
                style={{ backgroundImage: `url(${post.image})` }}
            >
                <div className="blog-hero-overlay">
                    <span className="blog-hero-date">{post.date}</span>
                    <h1 className="blog-hero-title">{post.title}</h1>
                    <p className="blog-hero-excerpt">{post.excerpt}</p>
                </div>
            </div>

            {/* HTML Content */}
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="blog-footer-nav">
                <Link to="/blog">← Back to Journal</Link>
            </div>
        </article>
    );
};

export default BlogPost;
