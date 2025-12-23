import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useJobs } from "../hooks/useJobs";
import { companyInfo } from "../data/mockData";
import {
  MapPin,
  Briefcase,
  Clock,
  CheckCircle,
  ChevronDown,
  Heart,
  GraduationCap,
  Shield,
  Coins,
} from "lucide-react";
import heroPlatform from "../assets/hero-platform.jpg";

const applicationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select experience level"),
  message: z
    .string()
    .min(20, "Please provide more details about your background"),
});

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage",
  },
  {
    icon: GraduationCap,
    title: "Career Development",
    description: "Training programs and tuition reimbursement",
  },
  {
    icon: Shield,
    title: "Safety Culture",
    description: "Industry-leading safety programs and equipment",
  },
  {
    icon: Coins,
    title: "Competitive Pay",
    description: "Above-market compensation and bonuses",
  },
];

const Careers = () => {
  const { data: jobs = [], isLoading } = useJobs();
  const [expandedJob, setExpandedJob] = useState(null);
  //   const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data) => {
    console.log("Application submitted:", data);
    // toast({
    //   title: "Application Submitted!",
    //   description: "We'll review your application and get back to you soon.",
    // });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Careers | {companyInfo.name}</title>
        <meta
          name="description"
          content="Join oiller Energy Services team. Explore career opportunities in oil and gas including engineering, operations, and technical roles."
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
                Careers
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Build Your Future With Us
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Join a team that's shaping the future of energy. We're always
                looking for talented individuals who share our passion for
                excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
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
                Why Join Us
              </span>
              <h2 className="heading-section text-foreground">
                Benefits & Culture
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-industrial p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
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
                Open Positions
              </span>
              <h2 className="heading-section text-foreground">
                Current Opportunities
              </h2>
            </motion.div>

            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-card rounded-xl h-24"
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4 max-w-4xl mx-auto">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-industrial overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedJob(expandedJob === job.id ? null : job.id)
                      }
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={24}
                        className={`text-accent transition-transform ${
                          expandedJob === job.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-6 pb-6 border-t border-border"
                      >
                        <p className="text-muted-foreground mt-4 mb-4">
                          {job.description}
                        </p>
                        <h4 className="font-semibold text-foreground mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {job.requirements.map((req, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <CheckCircle size={16} className="text-accent" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding bg-muted">
          <div className="section-container max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Apply Now
              </span>
              <h2 className="heading-section text-foreground">
                Submit Your Application
              </h2>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={handleSubmit(onSubmit)}
              className="card-industrial p-6 lg:p-8 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Position
                  </label>
                  <select
                    {...register("position")}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a position</option>
                    {jobs.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.position.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Experience Level
                </label>
                <select
                  {...register("experience")}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                           focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select experience</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-5 years)</option>
                  <option value="senior">Senior (5-10 years)</option>
                  <option value="executive">Executive (10+ years)</option>
                </select>
                {errors.experience && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                           focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Share your experience and why you'd be a great fit..."
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-hero-primary w-full">
                Submit Application
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Careers;
