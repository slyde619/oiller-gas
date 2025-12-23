import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroPlatform from "../assets/hero-platform.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroPlatform}
          alt="Oil platform background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section text-primary-foreground mb-4">
              Ready to Power Your Next Project?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let's discuss how our expertise can drive efficiency, safety, and
              success for your operations. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-hero-primary">
                Request a Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:+17135550100"
                className="btn-hero-secondary flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: "24/7", label: "Support Available" },
              { value: "<48h", label: "Response Time" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "0.5", label: "TRIR Safety Record" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 border border-primary-foreground/20 
                         rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
