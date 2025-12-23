import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import AboutTeaser from "../components/AboutTeaser";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { companyInfo } from "../data/mockData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{companyInfo.name} | Professional Oil & Gas Services</title>
        <meta
          name="description"
          content="oiller Energy Services delivers world-class oil and gas solutions including drilling, pipeline construction, and offshore operations. 45+ years of industry excellence."
        />
        <meta
          name="keywords"
          content="oil and gas services, drilling, pipeline construction, offshore operations, energy services"
        />
        <link rel="canonical" href="https://oillerenergy.com" />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <ServicesGrid limit={6} showCTA={true} />
        <AboutTeaser />
        <TestimonialsCarousel />
        <BlogSection />
        <CTASection />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
