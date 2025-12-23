import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import refineryImg from "../assets/refinery.jpg";

const AboutTeaser = () => {
  const features = [
    "45+ years of industry experience",
    "Global operations across 30+ countries",
    "ISO 45001 & ISO 14001 certified",
    "Zero-incident safety culture",
  ];

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={refineryImg}
                alt="Industrial refinery operations"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 
                       bg-accent text-accent-foreground p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold mb-1">2,500+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Leading the Energy Industry Forward
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since 1979, oiller Energy Services has been at the forefront of
              oil and gas innovation. We combine decades of expertise with
              cutting-edge technology to deliver solutions that power progress
              while protecting our planet.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our commitment to safety, quality, and sustainability has earned
              us the trust of major energy companies worldwide. We don't just
              meet industry standards—we set them.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    className="text-accent flex-shrink-0"
                    size={20}
                  />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground 
                       rounded-lg font-semibold hover:bg-primary-light transition-colors group"
            >
              Learn More About Us
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
