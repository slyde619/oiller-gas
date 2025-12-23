import { useState } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useBlogs } from "../hooks/useBlogs";
import { companyInfo } from "../data/mockData";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import pipelineImg from "../assets/pipeline.jpg";
import refineryImg from "../assets/refinery.jpg";
import heroPlatform from "../assets/hero-platform.jpg";

const imageMap = {
  offshore: heroPlatform,
  pipeline: pipelineImg,
  refinery: refineryImg,
};

const Blog = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useBlogs({ search, sort, page, limit: 6 });
  const { blogs = [], totalPages = 1, currentPage = 1 } = data || {};

  return (
    <>
      <Helmet>
        <title>Blog | {companyInfo.name}</title>
        <meta
          name="description"
          content="Stay updated with the latest oil and gas industry news, trends, regulations, and insights from oiller Energy Services experts."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={refineryImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Blog
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Industry Insights & News
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Expert perspectives on trends, regulations, and innovations
                shaping the future of the energy industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border sticky top-16 lg:top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-auto md:min-w-[300px]">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground
                           focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className="text-muted-foreground text-sm">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-4 py-3 rounded-lg border border-border bg-card text-foreground
                           focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="date">Most Recent</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-48 bg-muted rounded-t-xl" />
                    <div className="p-6 bg-card rounded-b-xl border border-border">
                      <div className="h-4 bg-muted rounded w-1/4 mb-4" />
                      <div className="h-6 bg-muted rounded mb-2" />
                      <div className="h-4 bg-muted rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No articles found matching your search.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {blogs.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group block h-full"
                      >
                        <div className="card-industrial h-full overflow-hidden">
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

                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                              <span className="flex items-center gap-1">
                                <User size={14} />
                                {post.author}
                              </span>
                            </div>

                            <h2
                              className="text-lg font-semibold text-foreground mb-2 
                                         group-hover:text-accent transition-colors line-clamp-2"
                            >
                              {post.title}
                            </h2>
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 
                               disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <span className="text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 
                               disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Blog;
