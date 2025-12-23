import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CTASection from "../components/CTASection";
import { companyInfo, initialServices } from "../data/mockData";
import {
  Wrench,
  Factory,
  Ship,
  ClipboardCheck,
  Leaf,
  CheckCircle,
} from "lucide-react";
import pipelineImg from "../assets/pipeline.jpg";
import refineryImg from "../assets/refinery.jpg";
import heroPlatform from "../assets/hero-platform.jpg";

const iconMap = {
  Drill: Wrench,
  Pipeline: Factory,
  Factory: Factory,
  Ship: Ship,
  ClipboardCheck: ClipboardCheck,
  Leaf: Leaf,
};

const imageMap = {
  drilling: heroPlatform,
  pipeline: pipelineImg,
  refinery: refineryImg,
  offshore: heroPlatform,
  consulting: refineryImg,
  environmental: pipelineImg,
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | {companyInfo.name}</title>
        <meta
          name="description"
          content="Explore oiller Energy's comprehensive oil and gas services including drilling, pipeline construction, offshore operations, and technical consulting."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={pipelineImg}
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
                Our Services
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Comprehensive Energy Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                From exploration to production, we deliver end-to-end services
                that drive efficiency, safety, and sustainable growth for our
                clients worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="space-y-20">
              {initialServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Wrench;
                const image = imageMap[service.image];
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div className={`${isEven ? "" : "lg:order-2"}`}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={image}
                          alt={service.title}
                          className="w-full h-[300px] lg:h-[400px] object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                            <Icon
                              size={28}
                              className="text-accent-foreground"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? "" : "lg:order-1"}`}>
                      <h2 className="heading-subsection text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Key Features */}
                      <ul className="space-y-3">
                        {[
                          "Industry-leading expertise",
                          "24/7 operational support",
                          "Safety-first approach",
                          "Cost-effective solutions",
                        ].map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle
                              className="text-accent flex-shrink-0"
                              size={18}
                            />
                            <span className="text-foreground text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Services;
