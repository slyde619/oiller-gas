import { Route, Routes } from "react-router";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Index />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRouter;
