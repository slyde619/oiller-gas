import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { companyInfo } from "../data/mockData";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import heroPlatform from "../assets/hero-platform.jpg";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(255),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

const Contact = () => {
  //   const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", data);
    // toast({
    //   title: "Message Sent!",
    //   description: "We'll get back to you within 24-48 hours.",
    // });
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | {companyInfo.name}</title>
        <meta
          name="description"
          content="Get in touch with oiller Energy Services. Contact us for quotes, inquiries, or to discuss your oil and gas project requirements."
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
                Contact Us
              </span>
              <h1 className="heading-display text-primary-foreground mb-6">
                Let's Power Your Success
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Ready to discuss your project? Our team is here to help. Reach
                out and we'll respond within 24-48 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="heading-subsection text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're looking for a quote, have questions about our
                  services, or want to explore partnership opportunities, we'd
                  love to hear from you.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        {companyInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM CST
                        <br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0908989893396!2d-95.36969208489385!3d29.760426981984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf3f95f87c6d%3A0x9891d7b94e6cd48d!2sHouston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1703097600000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="card-industrial p-6 lg:p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
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
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                                 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john@company.com"
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
                        Company
                      </label>
                      <input
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                                 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your Company"
                      />
                    </div>
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
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="services">Service Inquiry</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero-primary w-full disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Contact;
