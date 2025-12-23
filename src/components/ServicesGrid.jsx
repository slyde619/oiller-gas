import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Drill,
  Factory,
  Ship,
  ClipboardCheck,
  Leaf,
  Wrench,
} from "lucide-react";
import { initialServices } from "../data/mockData";
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

const ServicesGrid = ({ limit = 6, showCTA = true }) => {
  const services = initialServices.slice(0, limit);

  return (
    <section className="section-padding bg-background">
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
            Our Services
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From exploration to production, we deliver end-to-end services that
            drive efficiency, safety, and sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            const bgImage = imageMap[service.image];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services#${service.id}`}
                  className="group block h-full"
                >
                  <div className="card-industrial h-full overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={bgImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 
                                 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                          <Icon size={24} className="text-accent-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3
                        className="text-xl font-semibold text-foreground mb-2 
                                   group-hover:text-accent transition-colors"
                      >
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <span
                        className="inline-flex items-center text-accent font-medium text-sm 
                                     group-hover:gap-2 transition-all"
                      >
                        Learn More
                        <ArrowRight
                          size={16}
                          className="ml-1 group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground 
                       rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
