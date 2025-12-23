import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { companyInfo, companyStats } from "../data/mockData";
import { CheckCircle, Award, Users, Globe, Shield } from "lucide-react";
import refineryImg from "../assets/refinery.jpg";
import pipelineImg from "../assets/pipeline.jpg";
import heroPlatform from "../assets/hero-platform.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Zero-incident culture with rigorous safety protocols across all operations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Delivering superior quality through continuous improvement and innovation.",
  },
  {
    icon: Users,
    title: "Integrity",
    description:
      "Building trust through transparency, honesty, and ethical business practices.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description:
      "Committed to environmental stewardship and responsible resource management.",
  },
];

const timeline = [
  { year: "1979", event: "Founded in Houston, Texas" },
  { year: "1985", event: "Expanded to Gulf of Mexico operations" },
  { year: "1995", event: "International expansion to North Sea" },
  { year: "2005", event: "Achieved ISO 14001 certification" },
  { year: "2015", event: "Launched sustainable operations initiative" },
  { year: "2024", event: "Operating in 30+ countries worldwide" },
];

const team = [
  { name: "David Richardson", role: "CEO & President", initials: "DR" },
  { name: "Maria Santos", role: "COO", initials: "MS" },
  { name: "Robert Chen", role: "CTO", initials: "RC" },
  { name: "Sarah Williams", role: "VP of Operations", initials: "SW" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | {companyInfo.name}</title>
        <meta
          name="description"
          content="Learn about oiller Energy Services' 45+ year history of excellence in oil and gas services. Discover our mission, values, and leadership team."
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
                About Us
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Powering Progress Since 1979
              </h1>
              <p className="text-xl text-primary-foreground/80">
                For over four decades, we've been at the forefront of oil and
                gas innovation, delivering solutions that drive efficiency and
                protect our planet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={refineryImg}
                  alt="Refinery operations"
                  className="rounded-2xl w-full h-[400px] object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-section text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To deliver world-class energy solutions that power global
                  progress while maintaining the highest standards of safety,
                  quality, and environmental responsibility. We believe in
                  creating value for our clients, communities, and the planet.
                </p>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative partner in the energy
                  industry, leading the transition to a sustainable future while
                  meeting today's energy demands.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.value.toLocaleString()}+
                  </div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Values
              </span>
              <h2 className="heading-section text-foreground">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-industrial p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Journey
              </span>
              <h2 className="heading-section text-foreground">Milestones</h2>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center gap-6 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent z-10" />
                  <div className="ml-12 md:ml-0 md:w-1/2 card-industrial p-4">
                    <span className="text-accent font-bold">{item.year}</span>
                    <p className="text-foreground">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding bg-muted">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Leadership
              </span>
              <h2 className="heading-section text-foreground">Our Team</h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-industrial p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default About;
