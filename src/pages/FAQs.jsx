import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { companyInfo, initialFAQs } from "../data/mockData";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import heroPlatform from "../assets/hero-platform.jpg";

const FAQs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [search, setSearch] = useState("");

  const filteredFaqs = initialFAQs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>FAQs | {companyInfo.name}</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about oiller Energy Services, our operations, safety certifications, and project timelines."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroPlatform}
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
                FAQs
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Find answers to common questions about our services, operations,
                and how we can support your energy projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground
                           focus:outline-none focus:ring-2 focus:ring-accent text-lg"
                />
              </div>
            </motion.div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle
                    className="mx-auto text-muted-foreground mb-4"
                    size={48}
                  />
                  <p className="text-muted-foreground text-lg">
                    No questions found matching your search.
                  </p>
                </motion.div>
              ) : (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="card-industrial overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === faq.id ? null : faq.id)
                      }
                      className="w-full p-6 text-left flex items-start justify-between gap-4"
                    >
                      <span className="font-semibold text-foreground text-lg leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={24}
                        className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                          openFaq === faq.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openFaq === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="border-t border-border pt-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              )}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center card-industrial p-8"
            >
              <HelpCircle className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to
                help.
              </p>
              <a href="/contact" className="btn-hero-primary inline-flex">
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FAQs;
