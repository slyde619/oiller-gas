import { useQuery } from "@tanstack/react-query";
import {
  getTestimonials,
  initialTestimonials,
  setTestimonials,
} from "../data/mockData";

// Initialize localStorage if empty
if (!localStorage.getItem("oiller_testimonials")) {
  setTestimonials(initialTestimonials);
}

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: () => getTestimonials(),
  });
};
