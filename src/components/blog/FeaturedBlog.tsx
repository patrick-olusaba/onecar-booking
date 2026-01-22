// src/components/blog/FeaturedBlog.tsx
import { Link } from "react-router-dom";
import { posts } from "../../data/post";

const FeaturedBlog = () => {
    const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
    if (featuredPosts.length < 3) return null;

    const [mainPost, ...sidePosts] = featuredPosts;

    return (
        <section className="featured-blog">
            <div className="featured-inner">
                <div className="featured-header">
                    <h2>From Our Journal</h2>
                    <Link to="/blog" className="view-all">
                        View all →
                    </Link>
                </div>

                <div className="featured-layout">
                    {/* Large Feature */}
                    <Link
                        to={`/blog/${mainPost.slug}`}
                        className="featured-main"
                    >
                        <img src={mainPost.image} alt={mainPost.title} />
                        <div className="featured-overlay">
                            <span className="date">{mainPost.date}</span>
                            <h3>{mainPost.title}</h3>
                            <p>{mainPost.excerpt}</p>
                        </div>
                    </Link>

                    {/* Side Posts */}
                    <div className="featured-side">
                        {sidePosts.map(post => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="featured-small"
                            >
                                <img src={post.image} alt={post.title} />
                                <div>
                                    <span className="date">{post.date}</span>
                                    <h4>{post.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlog;
