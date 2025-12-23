import { Link, useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useBlog, useRelatedBlogs } from "../hooks/useBlogs";
import { companyInfo } from "../data/mockData";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import pipelineImg from "../assets/pipeline.jpg";
import refineryImg from "../assets/refinery.jpg";
import heroPlatform from "../assets/hero-platform.jpg";

const imageMap = {
  offshore: heroPlatform,
  pipeline: pipelineImg,
  refinery: refineryImg,
};

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useBlog(slug);
  const { data: relatedPosts = [] } = useRelatedBlogs(slug, 2);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Article Not Found
          </h1>
          <Link to="/blog" className="text-accent mr-2 hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          {post.title} | {companyInfo.name}
        </title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src={imageMap[post.image] || heroPlatform}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/50" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-5 gap-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light 
                transition-colors"
                >
                  <ArrowLeft size={18} />
                  Back to Blog
                </Link>

                <span
                  className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm 
                font-medium rounded-full"
                >
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {post.author}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Featured Image */}
              <img
                src={imageMap[post.image] || heroPlatform}
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl mb-8"
              />

              {/* Article Content */}
              <div className="text-foreground leading-relaxed">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h2
                        key={index}
                        className="text-2xl font-bold text-foreground mt-8 mb-4"
                      >
                        {paragraph.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </motion.article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 pt-16 border-t border-border"
              >
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="group card-industrial overflow-hidden"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={imageMap[related.image] || heroPlatform}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 
                                   group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-accent font-medium">
                          {related.category}
                        </span>
                        <h4
                          className="font-semibold text-foreground mt-1 group-hover:text-accent 
                                     transition-colors line-clamp-2"
                        >
                          {related.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default BlogPost;
