import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useFeaturedBlogs } from "../hooks/useBlogs";
import pipelineImg from "../assets/pipeline.jpg";
import refineryImg from "../assets/refinery.jpg";
import heroPlatform from "../assets/hero-platform.jpg";

const imageMap = {
  offshore: heroPlatform,
  pipeline: pipelineImg,
  refinery: refineryImg,
};

const BlogSection = () => {
  const { data: blogs = [], isLoading } = useFeaturedBlogs(3);

  if (isLoading) {
    return (
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 bg-border rounded-t-xl" />
                <div className="p-6 bg-card rounded-b-xl">
                  <div className="h-4 bg-border rounded w-1/4 mb-4" />
                  <div className="h-6 bg-border rounded mb-2" />
                  <div className="h-4 bg-border rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Latest Insights
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Industry News & Updates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest trends, regulations, and innovations
            in the energy sector.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <div className="card-industrial h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={imageMap[post.image] || heroPlatform}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-semibold text-foreground mb-2 
                                 group-hover:text-accent transition-colors line-clamp-2"
                    >
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span
                      className="inline-flex items-center text-accent font-medium text-sm 
                                   group-hover:gap-2 transition-all"
                    >
                      Read Article
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                     rounded-lg font-semibold hover:bg-primary-light transition-colors"
          >
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
